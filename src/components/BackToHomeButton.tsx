import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import ViewListIcon from "@mui/icons-material/ViewList";
import Box from "@mui/material/Box";

interface BackToHomeButtonProps {
  position?: "fixed" | "static";
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}

export default function BackToHomeButton({
  position = "fixed",
  variant = "outlined",
  size = "small",
}: BackToHomeButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Não mostrar o botão se já estivermos na homepage
  if (location.pathname === "/") {
    return null;
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  const navigationOptions = [
    {
      label: "Lawdesk Home",
      path: "/",
      icon: <HomeIcon fontSize="small" />,
      description: "Página principal do Lawdesk",
    },
    {
      label: "CRM Dashboard",
      path: "/crm",
      icon: <BusinessIcon fontSize="small" />,
      description: "Sistema CRM jurídico",
    },
    {
      label: "Analytics Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon fontSize="small" />,
      description: "Dashboard de análises",
    },
    {
      label: "Templates Hub",
      path: "/templates",
      icon: <ViewListIcon fontSize="small" />,
      description: "Central de templates",
    },
  ];

  const buttonContent = (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      startIcon={<HomeIcon />}
      endIcon={<KeyboardArrowDownIcon />}
      sx={{
        minWidth: 140,
        textTransform: "none",
      }}
    >
      Navegação
    </Button>
  );

  const menuContent = (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        elevation: 3,
        sx: {
          minWidth: 250,
          mt: 1,
        },
      }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      {navigationOptions.map((option, index) => (
        <MenuItem
          key={option.path}
          onClick={() => handleNavigation(option.path)}
          selected={location.pathname === option.path}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            py: 1.5,
            "&.Mui-selected": {
              backgroundColor: "action.selected",
            },
          }}
        >
          {option.icon}
          <Box>
            <Box sx={{ fontWeight: 500, fontSize: "0.875rem" }}>
              {option.label}
            </Box>
            <Box sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
              {option.description}
            </Box>
          </Box>
        </MenuItem>
      ))}
    </Menu>
  );

  if (position === "fixed") {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: (theme) => theme.zIndex.fab,
        }}
      >
        {buttonContent}
        {menuContent}
      </Box>
    );
  }

  return (
    <Box>
      {buttonContent}
      {menuContent}
    </Box>
  );
}
