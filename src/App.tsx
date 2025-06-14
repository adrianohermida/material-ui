import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Importar todas as páginas principais
import MarketingPage from "./marketing-page/MarketingPage"; // Página principal starter
import HomePage from "./components/HomePage"; // Hub de navegação
import Blog from "./blog/Blog";
import Checkout from "./checkout/Checkout";
import Dashboard from "./dashboard/Dashboard";
import SignIn from "./sign-in/SignIn";
import SignInSide from "./sign-in-side/SignInSide";
import SignUp from "./sign-up/SignUp";

// Importar CRM Dashboard e páginas individuais
import CrmDashboard from "./crm/CrmDashboard";
import Customers from "./crm/pages/Customers";
import Deals from "./crm/pages/Deals";
import Contacts from "./crm/pages/Contacts";
import Tasks from "./crm/pages/Tasks";
import Reports from "./crm/pages/Reports";
import Settings from "./crm/pages/Settings";

// Importar componente Help & Support (será criado)
import HelpSupport from "./components/HelpSupport";

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
        404: Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          ← Return to Marketing Page
        </a>
      </Typography>
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline enableColorScheme />
      <Routes>
        {/* Marketing Page como página principal starter */}
        <Route path="/" element={<MarketingPage />} />

        {/* Hub de navegação entre templates */}
        <Route path="/templates" element={<HomePage />} />

        {/* Páginas principais conforme especificação */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Páginas de autenticação */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-in-side" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* CRM Dashboard principal */}
        <Route path="/crm" element={<CrmDashboard />} />

        {/* Rotas individuais das páginas CRM */}
        <Route path="/crm/customers" element={<Customers />} />
        <Route path="/crm/deals" element={<Deals />} />
        <Route path="/crm/contacts" element={<Contacts />} />
        <Route path="/crm/tasks" element={<Tasks />} />
        <Route path="/crm/reports" element={<Reports />} />
        <Route path="/crm/settings" element={<Settings />} />

        {/* Help & Support */}
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/support" element={<HelpSupport />} />

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
