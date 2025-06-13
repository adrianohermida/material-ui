import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import SitemarkIcon from "./SitemarkIcon";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://lawdesk.com.br/">
        Lawdesk
      </Link>
      &nbsp;
      {new Date().getFullYear()}
      {". Todos os direitos reservados."}
    </Typography>
  );
}

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Newsletter signup:", email);
    alert(
      "Obrigado por se inscrever! Você receberá nossas atualizações em breve.",
    );
    setEmail("");
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <SitemarkIcon />
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              A plataforma mais completa para gestão jurídica com IA integrada.
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Automatize processos, gerencie clientes e impulsione seu
              escritório com tecnologia de ponta desenvolvida para advogados.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
              width: { xs: "100%", sm: "60%" },
            }}
          >
            {/* Produto */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                Produto
              </Typography>
              <Link
                color="text.secondary"
                variant="body2"
                onClick={() => scrollToSection("features")}
                sx={{ cursor: "pointer" }}
              >
                Recursos
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                onClick={() => scrollToSection("pricing")}
                sx={{ cursor: "pointer" }}
              >
                Planos
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                onClick={() => handleNavigation("/templates")}
                sx={{ cursor: "pointer" }}
              >
                Demonstração
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                onClick={() => handleNavigation("/crm")}
                sx={{ cursor: "pointer" }}
              >
                Comunidade
              </Link>
            </Box>

            {/* Empresa */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                Empresa
              </Typography>
              <Link
                color="text.secondary"
                variant="body2"
                onClick={() => handleNavigation("/help")}
                sx={{ cursor: "pointer" }}
              >
                Sobre nós
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                onClick={() => handleNavigation("/blog")}
                sx={{ cursor: "pointer" }}
              >
                Blog Jurídico
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                onClick={() => handleNavigation("/help")}
                sx={{ cursor: "pointer" }}
              >
                Carreiras
              </Link>
            </Box>

            {/* Suporte */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                Suporte
              </Typography>
              <Link
                color="text.secondary"
                variant="body2"
                onClick={() => handleNavigation("/help")}
                sx={{ cursor: "pointer" }}
              >
                Ajuda
              </Link>
              <Link
                color="text.secondary"
                variant="body2"
                onClick={() => handleNavigation("/help")}
                sx={{ cursor: "pointer" }}
              >
                Contato
              </Link>
              <Link color="text.secondary" variant="body2" href="#">
                Termos de Uso
              </Link>
              <Link color="text.secondary" variant="body2" href="#">
                Política de Privacidade
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Newsletter */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            minWidth: { xs: "100%", sm: "35%" },
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "medium" }}>
            Newsletter
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            Receba atualizações sobre lançamentos e novidades da Lawdesk CRM.
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            component="form"
            onSubmit={handleSubscribe}
          >
            <InputLabel htmlFor="email-newsletter" sx={{ display: "none" }}>
              Email
            </InputLabel>
            <TextField
              id="email-newsletter"
              hiddenLabel
              size="small"
              variant="outlined"
              fullWidth
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              slotProps={{
                htmlInput: {
                  autoComplete: "off",
                  "aria-label": "Digite seu endereço de email",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              sx={{ flexShrink: 0 }}
            >
              Inscrever-se
            </Button>
          </Stack>
        </Box>
      </Box>

      <Divider sx={{ width: "100%" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            Política de Privacidade
          </Link>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Termos de Serviço
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: "left", color: "text.secondary" }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/lawdesk"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/lawdesk"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/company/lawdesk"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
