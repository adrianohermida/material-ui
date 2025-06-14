#!/usr/bin/env node

// Deployment verification script
// Checks if all necessary files and configurations are in place

const fs = require("fs");
const path = require("path");

function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  console.log(`${exists ? "✅" : "❌"} ${description}: ${filePath}`);
  return exists;
}

function checkGitHubPagesSetup() {
  console.log("🔍 Verificando configuração do GitHub Pages...\n");

  let allGood = true;

  // Check essential files
  allGood &= checkFile(
    ".github/workflows/deploy.yml",
    "GitHub Actions workflow",
  );
  allGood &= checkFile("public/404.html", "SPA redirect file");
  allGood &= checkFile("index.html", "Main HTML file");
  allGood &= checkFile("vite.config.ts", "Vite configuration");

  console.log("\n📋 Verificando conteúdo dos arquivos...\n");

  // Check index.html for SPA script
  if (fs.existsSync("index.html")) {
    const indexContent = fs.readFileSync("index.html", "utf8");
    const hasSpaScript = indexContent.includes("spa-github-pages");
    console.log(`${hasSpaScript ? "✅" : "❌"} Script SPA no index.html`);
    allGood &= hasSpaScript;
  }

  // Check 404.html content
  if (fs.existsSync("public/404.html")) {
    const content404 = fs.readFileSync("public/404.html", "utf8");
    const hasRedirect = content404.includes("l.replace");
    console.log(
      `${hasRedirect ? "✅" : "❌"} Script de redirecionamento no 404.html`,
    );
    allGood &= hasRedirect;
  }

  // Check vite.config.ts for base
  if (fs.existsSync("vite.config.ts")) {
    const viteContent = fs.readFileSync("vite.config.ts", "utf8");
    const hasBase = viteContent.includes("base:");
    console.log(`${hasBase ? "✅" : "❌"} Configuração base no vite.config.ts`);
    allGood &= hasBase;
  }

  // Check package.json scripts
  if (fs.existsSync("package.json")) {
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const hasBuildGithub =
      packageJson.scripts && packageJson.scripts["build:github"];
    console.log(
      `${hasBuildGithub ? "✅" : "❌"} Script build:github no package.json`,
    );
    allGood &= hasBuildGithub;
  }

  console.log("\n📊 Resultado da verificação:\n");

  if (allGood) {
    console.log("🎉 Todas as configurações estão corretas!");
    console.log("\n📋 Próximos passos:");
    console.log(
      '1. Faça commit das alterações: git add . && git commit -m "Setup GitHub Pages"',
    );
    console.log("2. Push para o repositório: git push origin main");
    console.log("3. Ative GitHub Pages nas configurações do repositório");
    console.log('4. Selecione "GitHub Actions" como source');
    console.log("5. Aguarde o deploy automático");
  } else {
    console.log("❌ Algumas configurações estão faltando ou incorretas.");
    console.log("\n🔧 Execute os seguintes comandos para corrigir:");
    console.log("npm run deploy");
  }

  return allGood;
}

// Check for common issues
function checkCommonIssues() {
  console.log("\n🐛 Verificando problemas comuns...\n");

  // Check if dist folder exists (after build)
  const distExists = fs.existsSync("dist");
  console.log(
    `${distExists ? "✅" : "⚠️"} Pasta dist ${distExists ? "existe" : "não existe (execute npm run build)"}`,
  );

  // Check node_modules
  const nodeModulesExists = fs.existsSync("node_modules");
  console.log(
    `${nodeModulesExists ? "✅" : "❌"} Node modules ${nodeModulesExists ? "instalados" : "faltando (execute npm install)"}`,
  );

  // Check TypeScript compilation
  try {
    const tsConfig = JSON.parse(fs.readFileSync("tsconfig.json", "utf8"));
    console.log("✅ TypeScript configurado corretamente");
  } catch (error) {
    console.log("⚠️ Problema na configuração TypeScript");
  }
}

// Main function
function main() {
  console.log("🔍 Lawdesk - Verificação de Deploy GitHub Pages\n");
  console.log("==========================================\n");

  const setupOk = checkGitHubPagesSetup();
  checkCommonIssues();

  console.log("\n==========================================");
  console.log(
    `Status geral: ${setupOk ? "✅ PRONTO PARA DEPLOY" : "❌ PRECISA CONFIGURAR"}`,
  );
  console.log("==========================================\n");

  if (!setupOk) {
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  checkGitHubPagesSetup,
  checkCommonIssues,
};
