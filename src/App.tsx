import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { setupBuilderMessageHandler } from "./utils/builderMessageHandler";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// ===== PÁGINAS PÚBLICAS =====
import MarketingPage from "./marketing-page/MarketingPage"; // Página principal (público)
import Blog from "./blog/Blog"; // Blog público
import SignIn from "./sign-in/SignIn"; // Login
import SignInSide from "./sign-in-side/SignInSide"; // Login alternativo
import SignUp from "./sign-up/SignUp"; // Cadastro

// ===== ÁREA DO CLIENTE (CRM) =====
import CrmDashboard from "./crm/CrmDashboard"; // HOME da área do cliente
import Customers from "./crm/pages/Customers"; // Gestão de clientes
import Deals from "./crm/pages/Deals"; // Gestão de negócios
import Contacts from "./crm/pages/Contacts"; // Gestão de contatos
import Tasks from "./crm/pages/Tasks"; // Gestão de tarefas
import Reports from "./crm/pages/Reports"; // Relatórios CRM
import Settings from "./crm/pages/Settings"; // Configurações CRM

// ===== FERRAMENTAS COMPLEMENTARES =====
import Dashboard from "./dashboard/Dashboard"; // Analytics Dashboard (separado do CRM)
import Checkout from "./checkout/Checkout"; // E-commerce
import HomePage from "./components/HomePage"; // Hub de templates

// ===== SUPORTE =====
import HelpSupport from "./components/HelpSupport"; // Help & Support
import BuilderCompatibilityCheck from "./components/BuilderCompatibilityCheck"; // Builder.io compatibility

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        404: Página Não Encontrada
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        A página que você está procurando não existe ou foi movida.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          ← Voltar para a página inicial
        </a>
      </Typography>
    </Box>
  );
}

export default function App() {
  // Setup builder.io message handler
  React.useEffect(() => {
    const cleanup = setupBuilderMessageHandler();
    return cleanup;
  }, []);

  return (
    <BrowserRouter>
      <CssBaseline enableColorScheme />
      <Routes>
        {/* ===== ÁREA PÚBLICA ===== */}
        <Route path="/" element={<MarketingPage />} />
        <Route path="/blog" element={<Blog />} />
        {/* ===== AUTENTICAÇÃO ===== */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-in-side" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* ===== ÁREA DO CLIENTE - HOME após login ===== */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Página principal da área do cliente */}
        {/* ===== CRM JURÍDICO (Aplicativo específico) ===== */}
        <Route path="/crm" element={<CrmDashboard />} />
        <Route path="/crm/customers" element={<Customers />} />
        <Route path="/crm/contacts" element={<Contacts />} />
        <Route path="/crm/deals" element={<Deals />} />
        <Route path="/crm/tasks" element={<Tasks />} />
        <Route path="/crm/reports" element={<Reports />} />
        <Route path="/crm/settings" element={<Settings />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/templates" element={<HomePage />} />
        {/* ===== SUPORTE ===== */}
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/support" element={<HelpSupport />} />
        {/* ===== BUILDER.IO COMPATIBILITY ===== */}
        <Route path="/builder-test" element={<BuilderCompatibilityCheck />} />
        {/* ===== 404 ===== */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
