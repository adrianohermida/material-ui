# Material UI - Vite Template Collection

Este projeto apresenta uma coleção completa de templates Material-UI funcionais com um sistema de roteamento integrado.

## 🚀 Como usar

```bash
git clone https://github.com/steve8708/mui-vite.git
cd mui-vite
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) para ver a aplicação.

## 📁 Estrutura do Projeto

O projeto agora inclui um sistema de rotas completo que permite navegar entre diferentes templates:

### 🏠 **Homepage (`/`)**

- Página principal com navegação para todos os templates
- Interface moderna com categorização de templates
- Cards interativos com descrições de cada template

### 🔗 **Rotas Disponíveis**

#### **Autenticação**

- `/sign-in` - Formulário de login simples
- `/sign-in-side` - Login com layout split
- `/sign-up` - Formulário de registro

#### **Negócios & Analytics**

- `/crm/*` - Sistema CRM completo com rotas aninhadas:
  - `/crm` - Dashboard principal
  - `/crm/customers` - Gestão de clientes
  - `/crm/deals` - Gestão de negócios
  - `/crm/contacts` - Gestão de contatos
  - `/crm/tasks` - Gestão de tarefas
  - `/crm/reports` - Relatórios
  - `/crm/settings` - Configurações
- `/dashboard` - Dashboard analítico com gráficos

#### **Marketing & Conteúdo**

- `/marketing` - Landing page de marketing
- `/blog` - Plataforma de blog

#### **E-commerce**

- `/checkout` - Fluxo de checkout multi-etapas

## 🛠 **Tecnologias Utilizadas**

- **React 18** com TypeScript
- **Material-UI v7** - Componentes e tema
- **React Router v7** - Sistema de roteamento
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Utilitários CSS
- **Emotion** - CSS-in-JS
- **Material-UI X** - Componentes avançados (Charts, DataGrid, DatePickers)

## 🎨 **Funcionalidades**

### **Sistema de Rotas Integrado**

- Navegação fluída entre templates
- Rotas aninhadas para sistemas complexos (CRM)
- Páginas 404 personalizadas
- Botões de navegação "Back to Home" em todas as páginas

### **Tema Consistente**

- Suporte a modo escuro/claro
- Tema personalizado Material-UI
- Responsividade completa
- Componentes acessíveis

### **Templates Incluídos**

1. **CRM Dashboard** - Sistema completo de gestão de relacionamento com cliente
2. **Analytics Dashboard** - Painel analítico com charts e métricas
3. **Marketing Page** - Landing page moderna com seções completas
4. **Blog Platform** - Interface de blog limpa e elegante
5. **E-commerce Checkout** - Fluxo de compra multi-etapas
6. **Authentication Pages** - Formulários de login e registro

## 🔧 **Desenvolvimento**

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 📖 **Como Navegar**

1. **Acesse a homepage** em `/` para ver todos os templates
2. **Use os filtros** para encontrar templates por categoria
3. **Clique nos cards** para navegar para cada template
4. **Use o botão "Back to Home"** em qualquer página para retornar
5. **Explore o CRM** que tem seu próprio sistema de navegação interna

## 🎯 **Estrutura de Arquivos**

```
src/
├── components/          # Componentes compartilhados
│   ├── HomePage.tsx     # Página principal de navegação
│   └── BackToHomeButton.tsx # Botão de retorno
├── blog/               # Template de blog
├── checkout/           # Template de checkout
├── crm/               # Sistema CRM com rotas aninhadas
├── dashboard/         # Dashboard analítico
├── marketing-page/    # Landing page de marketing
├── sign-in/          # Login simples
├── sign-in-side/     # Login com layout split
├── sign-up/          # Registro
└── shared-theme/     # Tema compartilhado
```

## 🚨 **Correções Implementadas**

### **Antes:**

- Apenas o CRM era acessível (rota catch-all)
- Não havia navegação entre templates
- Páginas isoladas sem integração

### **Depois:**

- Sistema de rotas completo e funcional
- Homepage centralizada com navegação
- Botões de retorno em todas as páginas
- Integração adequada do sistema CRM
- Rotas aninhadas funcionais

## 📚 **Próximos Passos**

Para continuar o desenvolvimento:

1. **Personalize os templates** conforme suas necessidades
2. **Adicione novos templates** seguindo a estrutura existente
3. **Explore a documentação** do [Material-UI](https://mui.com/material-ui/)
4. **Adicione funcionalidades** específicas ao seu projeto

---

Este projeto demonstra como integrar **Tailwind CSS** e **Vite** com **Material-UI** em uma aplicação **TypeScript** completa e funcional.
