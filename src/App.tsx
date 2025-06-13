import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Importar todas as páginas
import HomePage from "./components/HomePage";
import Blog from "./blog/Blog";
import Checkout from "./checkout/Checkout";
import Dashboard from "./dashboard/Dashboard";
import MarketingPage from "./marketing-page/MarketingPage";
import SignIn from "./sign-in/SignIn";
import SignInSide from "./sign-in-side/SignInSide";
import SignUp from "./sign-up/SignUp";
import CrmDashboard from "./crm/CrmDashboard";

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
          ← Return to Home
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
        {/* Homepage principal */}
        <Route path="/" element={<HomePage />} />

        {/* Páginas de autenticação */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-in-side" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Páginas funcionais */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketing" element={<MarketingPage />} />

        {/* CRM com rotas aninhadas */}
        <Route path="/crm/*" element={<CrmDashboard />} />

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
