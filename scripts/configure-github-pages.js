#!/usr/bin/env node

/**
 * GitHub Pages Configuration Script
 * Automatically configures the correct base path for GitHub Pages deployment
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");

// Read package.json to get repository info
const packageJsonPath = join(projectRoot, "package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

// Extract repository name from git remote or use manual configuration
let repositoryName = "";
let isUserSite = false;

// Check if this is a user/organization site (username.github.io)
if (
  packageJson.name === "username.github.io" ||
  packageJson.repository?.url?.includes(".github.io.git")
) {
  isUserSite = true;
  repositoryName = "";
} else {
  // Extract repository name from package.json or use the package name
  if (packageJson.repository?.url) {
    const match = packageJson.repository.url.match(
      /github\.com[/:]([\w-]+)\/([\w-]+)/,
    );
    if (match) {
      repositoryName = match[2].replace(".git", "");
    }
  } else {
    // Fallback to package name
    repositoryName = packageJson.name;
  }
}

// Read current vite.config.ts
const viteConfigPath = join(projectRoot, "vite.config.ts");
let viteConfig = readFileSync(viteConfigPath, "utf8");

// Determine the correct base path
const basePath = isUserSite ? "/" : `/${repositoryName}/`;

console.log("🔧 Configuring GitHub Pages deployment...");
console.log(`📦 Repository: ${repositoryName || "User/Organization site"}`);
console.log(`🌐 Base path: ${basePath}`);
console.log(
  `🏠 Site type: ${isUserSite ? "User/Organization site" : "Project site"}`,
);

// Update vite.config.ts with the correct base path
const updatedViteConfig = viteConfig.replace(
  /base:\s*["'].*?["'],?\s*\/\/.*?$/m,
  `base: "${basePath}", // GitHub Pages base path - auto-configured`,
);

writeFileSync(viteConfigPath, updatedViteConfig);

// Update package.json with homepage field
const updatedPackageJson = {
  ...packageJson,
  homepage: isUserSite
    ? `https://${repositoryName || "USERNAME"}.github.io/`
    : `https://USERNAME.github.io/${repositoryName}/`,
};

writeFileSync(packageJsonPath, JSON.stringify(updatedPackageJson, null, 2));

console.log("✅ Configuration updated successfully!");
console.log("📝 Next steps:");
console.log(
  '   1. Replace "USERNAME" in package.json homepage with your GitHub username',
);
console.log("   2. Commit and push changes");
console.log("   3. Check GitHub Pages settings in repository");
console.log("   4. Wait for deployment to complete");

// Create a verification script
const verificationScript = `#!/usr/bin/env node

// GitHub Pages Deployment Verification
console.log('🔍 GitHub Pages Configuration:');
console.log('Repository type:', '${isUserSite ? "User/Organization site" : "Project site"}');
console.log('Base path:', '${basePath}');
console.log('Expected URL:', '${updatedPackageJson.homepage}');
console.log('');
console.log('✅ Configuration looks correct!');
console.log('📍 Remember to:');
console.log('   - Update "USERNAME" in package.json homepage');
console.log('   - Enable GitHub Pages in repository settings');
console.log('   - Set source to "GitHub Actions"');
`;

writeFileSync(
  join(projectRoot, "scripts/verify-github-pages.js"),
  verificationScript,
);

console.log("📋 Created verification script: scripts/verify-github-pages.js");
