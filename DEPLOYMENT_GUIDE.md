# 🚀 Guia de Deploy - Lawdesk no GitHub Pages

## 📋 **Configurações Implementadas**

### ✅ **1. Configuração do Vite**

- `vite.config.ts` configurado para GitHub Pages
- Base URL configurável para diferentes ambientes
- Build otimizado para produção

### ✅ **2. GitHub Pages SPA Support**

- `404.html` criado para redirecionamento de rotas
- Script de redirecionamento no `index.html`
- Suporte completo para React Router

### ✅ **3. GitHub Actions Workflow**

- Deploy automático em push para main/master
- Build e deploy configurados
- Permissions corretas para Pages

### ✅ **4. SEO e Meta Tags**

- Meta tags otimizadas para Lawdesk
- Open Graph e Twitter Cards
- Descrições em português

## 🛠️ **Como Configurar no GitHub**

### **Passo 1: Ativar GitHub Pages**

1. Vá para seu repositório no GitHub
2. Clique em `Settings` > `Pages`
3. Em `Source`, selecione `GitHub Actions`
4. Salve as configurações

### **Passo 2: Configurar Base URL (se necessário)**

#### **Para repositório (username.github.io/repository-name):**

```typescript
// vite.config.ts
export default defineConfig({
  base: "/nome-do-seu-repositorio/",
  // ... resto da configuração
});
```

#### **Para domínio customizado (seudominio.com):**

```typescript
// vite.config.ts
export default defineConfig({
  base: "/",
  // ... resto da configuração
});
```

### **Passo 3: Push para o Repositório**

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

## 🌐 **URLs de Acesso**

### **GitHub Pages Padrão:**

```
https://seuusuario.github.io/nome-do-repositorio/
```

### **Domínio Customizado:**

```
https://seudominio.com/
```

## 🔧 **Scripts Disponíveis**

```bash
# Desenvolvimento local
npm run dev

# Build para GitHub Pages
npm run build:github

# Build padrão
npm run build

# Preview do build
npm run preview

# Deploy (build + preparação)
npm run deploy
```

## 📁 **Estrutura de Arquivos Criados**

```
projeto/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── 404.html               # Redirecionamento SPA
├── index.html                 # Meta tags e script SPA
├── vite.config.ts            # Configuração Vite
├── deploy.config.js          # Configurações de deploy
└── DEPLOYMENT_GUIDE.md       # Este guia
```

## 🎯 **Funcionalidades Garantidas**

### ✅ **Navegação Completa**

- Todas as rotas funcionam: `/`, `/crm`, `/sign-in`, etc.
- Refresh da página mantém a rota
- Links diretos funcionam

### ✅ **SEO Otimizado**

- Meta tags para Lawdesk
- Descrições em português
- Social media cards

### ✅ **Performance**

- Build otimizado
- Assets comprimidos
- Loading rápido

## 🐛 **Troubleshooting**

### **Problema: Página em branco**

**Solução**: Verifique a configuração do `base` no `vite.config.ts`

### **Problema: Rotas 404**

**Solução**: Confirme que o arquivo `404.html` está na pasta `public/`

### **Problema: Assets não carregam**

**Solução**: Verifique se o `base` URL está correto

### **Problema: Build falha**

**Solução**: Execute `npm ci` e depois `npm run build:github`

## 🔄 **Deploy Automático**

O deploy acontece automaticamente quando você faz push para `main` ou `master`:

1. **Build**: Compila o projeto
2. **Test**: Verifica se não há erros
3. **Deploy**: Publica no GitHub Pages
4. **Live**: Site disponível na URL

## 📊 **Monitoramento**

Você pode acompanhar o status do deploy em:

- **Actions**: `github.com/seuusuario/repositorio/actions`
- **Pages**: `github.com/seuusuario/repositorio/settings/pages`

## 🎉 **Resultado Final**

Após configurar, seu site estará disponível com:

- ✅ **Todas as páginas funcionando**
- ✅ **Navegação completa**
- ✅ **Design responsivo**
- ✅ **SEO otimizado**
- ✅ **Deploy automático**

**🚀 Seu Lawdesk estará live no GitHub Pages!**
