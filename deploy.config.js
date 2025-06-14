// Deployment Configuration for Lawdesk
// This file helps configure the app for different deployment environments

const deploymentConfig = {
  // GitHub Pages Configuration
  githubPages: {
    // For repository pages (username.github.io/repository-name)
    // Change 'repository-name' to your actual repository name
    repositoryBase: "/repository-name/",

    // For custom domain or user pages (username.github.io)
    customDomainBase: "/",

    // Build command for GitHub Pages
    buildCommand: "npm run build:github",
  },

  // Custom Domain Configuration
  customDomain: {
    // For custom domains (example.com)
    base: "/",
    buildCommand: "npm run build",
  },

  // Development Configuration
  development: {
    base: "/",
    port: 5173,
  },
};

// Helper function to get the correct base URL
function getBaseUrl() {
  // Check if we're building for GitHub Pages
  if (process.env.GITHUB_PAGES) {
    return deploymentConfig.githubPages.repositoryBase;
  }

  // Check if we have a custom domain
  if (process.env.CUSTOM_DOMAIN) {
    return deploymentConfig.customDomain.base;
  }

  // Default to development
  return deploymentConfig.development.base;
}

module.exports = {
  deploymentConfig,
  getBaseUrl,
};
