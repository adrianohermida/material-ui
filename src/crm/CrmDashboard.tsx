import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-charts/themeAugmentation";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import CrmAppNavbar from "./components/CrmAppNavbar";
import CrmHeader from "./components/CrmHeader";
import CrmSideMenu from "./components/CrmSideMenu";
import CrmMainDashboard from "./components/CrmMainDashboard";
import Customers from "./pages/Customers";
import Deals from "./pages/Deals";
import Contacts from "./pages/Contacts";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import AppTheme from "../shared-theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "../dashboard/theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function CrmDashboard() {
  const location = useLocation();

  return (
    <AppTheme themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <CrmSideMenu />
        <CrmAppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            {/* Botão para voltar à homepage */}
            <Box sx={{ alignSelf: "flex-start", mb: 2 }}>
              <Button
                startIcon={<HomeIcon />}
                onClick={() => (window.location.href = "/")}
                variant="outlined"
                size="small"
              >
                Back to Home
              </Button>
            </Box>

            <CrmHeader />

            <Routes>
              <Route index element={<CrmMainDashboard />} />
              <Route path="customers" element={<Customers />} />
              <Route path="deals" element={<Deals />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
              <Route
                path="*"
                element={
                  <Box sx={{ textAlign: "center", py: 4 }}>
                    <Typography variant="h6" gutterBottom>
                      CRM Page Not Found
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The CRM page you're looking for doesn't exist.
                    </Typography>
                  </Box>
                }
              />
            </Routes>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
