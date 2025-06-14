#!/usr/bin/env node

/**
 * DNS Verification Script for lawdesk.com.br
 * Verifies DNS configuration and GitHub Pages setup
 */

import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const domain = "lawdesk.com.br";
const githubPagesIPs = [
  "185.199.108.153",
  "185.199.109.153",
  "185.199.110.153",
  "185.199.111.153",
];

console.log("🔍 Verificando configuração DNS para lawdesk.com.br...\n");

async function checkDNS() {
  try {
    console.log("📡 Testando resolução DNS...");

    // Test nslookup
    try {
      const { stdout } = await execAsync(`nslookup ${domain}`);
      console.log("✅ nslookup resultado:");
      console.log(stdout);
    } catch (error) {
      console.log("❌ nslookup falhou:", error.message);
    }

    // Check if it resolves to GitHub Pages IPs
    try {
      const { stdout } = await execAsync(`host ${domain}`);
      const isGitHubPages = githubPagesIPs.some((ip) => stdout.includes(ip));

      if (isGitHubPages) {
        console.log("✅ Domínio resolve para GitHub Pages IPs");
      } else {
        console.log("❌ Domínio não resolve para GitHub Pages");
        console.log("IPs esperados:", githubPagesIPs.join(", "));
      }
    } catch (error) {
      console.log("⚠️  Comando host não disponível, pulando teste...");
    }
  } catch (error) {
    console.log("❌ Erro ao verificar DNS:", error.message);
  }
}

async function checkGitHubPages() {
  console.log("\n🐙 Verificando status GitHub Pages...");

  try {
    const { stdout } = await execAsync(
      'curl -s -o /dev/null -w "%{http_code}" https://lawdesk.com.br/',
    );
    const statusCode = stdout.trim();

    switch (statusCode) {
      case "200":
        console.log("✅ Site carregando corretamente (200 OK)");
        break;
      case "404":
        console.log("❌ Site retornando 404 - Verifique configuração");
        break;
      case "000":
        console.log("❌ Não foi possível conectar - Verifique DNS");
        break;
      default:
        console.log(`⚠️  Status HTTP: ${statusCode}`);
    }
  } catch (error) {
    console.log("❌ Erro ao verificar site:", error.message);
  }
}

function printRecommendations() {
  console.log("\n📋 Configuração DNS Recomendada:");
  console.log("================================");
  console.log("Tipo: CNAME");
  console.log("Nome: @ (ou lawdesk)");
  console.log("Valor: SEU_USUARIO.github.io");
  console.log("TTL: 3600");
  console.log("");
  console.log("OU use registros A:");
  githubPagesIPs.forEach((ip) => {
    console.log(`Tipo: A, Nome: @, Valor: ${ip}`);
  });

  console.log("\n🔧 Passos de Troubleshooting:");
  console.log("============================");
  console.log("1. Configure DNS no seu provedor (Registro.br)");
  console.log("2. Aguarde propagação (até 24 horas)");
  console.log("3. Configure custom domain no GitHub Pages settings");
  console.log("4. Aguarde verificação do GitHub");
  console.log('5. Habilite "Enforce HTTPS"');

  console.log("\n📞 Contatos Úteis:");
  console.log("==================");
  console.log("Registro.br: https://registro.br/");
  console.log("GitHub Pages: https://docs.github.com/pages");
  console.log("DNS Checker: https://dnschecker.org/");
}

async function main() {
  await checkDNS();
  await checkGitHubPages();
  printRecommendations();

  console.log("\n✨ Verificação concluída!");
  console.log("💡 Execute novamente em algumas horas se houver problemas.");
}

main().catch(console.error);
