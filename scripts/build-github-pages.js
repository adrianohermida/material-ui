#!/usr/bin/env node

// Build script for GitHub Pages deployment
// This script helps configure the build for different GitHub Pages setups

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Get repository name from package.json or git remote
function getRepositoryName() {
  try {
    // Try to get from git remote
    const remoteUrl = execSync("git remote get-url origin", {
      encoding: "utf8",
    }).trim();
    const match = remoteUrl.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
    if (match) {
      return match[2];
    }
  } catch (error) {
    console.log("Could not determine repository name from git remote");
  }

  // Fallback to package.json name
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
  return packageJson.name;
}

// Determine if this is a user/organization page or project page
function isUserOrOrgPage() {
  const repoName = getRepositoryName();
  // User/org pages typically have format: username.github.io
  return repoName.endsWith(".github.io");
}

// Update vite config for GitHub Pages
function updateViteConfig() {
  const viteConfigPath = path.join(process.cwd(), "vite.config.ts");
  let viteConfig = fs.readFileSync(viteConfigPath, "utf8");

  const repoName = getRepositoryName();
  const isUserPage = isUserOrOrgPage();

  // Determine base URL
  const baseUrl = isUserPage ? "/" : `/${repoName}/`;

  // Update base in vite config
  viteConfig = viteConfig.replace(
    /base:\s*["'][^"']*["']/,
    `base: "${baseUrl}"`,
  );

  fs.writeFileSync(viteConfigPath, viteConfig);

  console.log(`✅ Updated vite.config.ts with base: "${baseUrl}"`);
  console.log(`📦 Repository: ${repoName}`);
  console.log(`🏠 Page type: ${isUserPage ? "User/Organization" : "Project"}`);
}

// Main execution
function main() {
  console.log("🚀 Configuring build for GitHub Pages...\n");

  // Update vite config
  updateViteConfig();

  // Run the build
  console.log("\n📦 Building project...");
  try {
    execSync("npm run build", { stdio: "inherit" });
    console.log("\n✅ Build completed successfully!");
    console.log("\n📋 Next steps:");
    console.log("1. Commit and push your changes");
    console.log("2. Enable GitHub Pages in repository settings");
    console.log('3. Select "GitHub Actions" as source');
    console.log("4. Your site will be available shortly!");
  } catch (error) {
    console.error("\n❌ Build failed:", error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  getRepositoryName,
  isUserOrOrgPage,
  updateViteConfig,
};
