import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
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

  // Não mostrar o botão se já estivermos na homepage
  if (location.pathname === "/") {
    return null;
  }

  const handleGoHome = () => {
    navigate("/");
  };

  const buttonProps = {
    startIcon: <HomeIcon />,
    onClick: handleGoHome,
    variant,
    size,
    children: "Back to Home",
  };

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
        <Button {...buttonProps} />
      </Box>
    );
  }

  return <Button {...buttonProps} />;
}
