import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";
import Sitemark from "./SitemarkIcon";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Sitemark />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection("features")}
              >
                Recursos
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection("testimonials")}
              >
                Depoimentos
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection("highlights")}
              >
                Diferenciais
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection("pricing")}
              >
                Planos
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection("faq")}
                sx={{ minWidth: 0 }}
              >
                Perguntas
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => handleNavigation("/blog")}
                sx={{ minWidth: 0 }}
              >
                Conteúdo
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => handleNavigation("/help")}
                sx={{ minWidth: 0 }}
              >
                Ajuda
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => handleNavigation("/sign-in")}
            >
              Entrar
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={() => handleNavigation("/sign-up")}
            >
              Testar Grátis
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem
                  onClick={() => {
                    scrollToSection("features");
                    toggleDrawer(false)();
                  }}
                >
                  Recursos
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("testimonials");
                    toggleDrawer(false)();
                  }}
                >
                  Depoimentos
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("highlights");
                    toggleDrawer(false)();
                  }}
                >
                  Diferenciais
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("pricing");
                    toggleDrawer(false)();
                  }}
                >
                  Planos
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("faq");
                    toggleDrawer(false)();
                  }}
                >
                  Perguntas
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleNavigation("/blog");
                    toggleDrawer(false)();
                  }}
                >
                  Conteúdo
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleNavigation("/help");
                    toggleDrawer(false)();
                  }}
                >
                  Ajuda
                </MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() => handleNavigation("/sign-up")}
                  >
                    Testar Grátis
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="outlined"
                    fullWidth
                    onClick={() => handleNavigation("/sign-in")}
                  >
                    Entrar
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
