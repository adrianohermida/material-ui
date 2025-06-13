import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import StorefrontIcon from "@mui/icons-material/Storefront";

const items = [
  {
    icon: <PhoneAndroidIcon />,
    title: "Experiência 100% responsiva",
    description:
      "Interface adaptável que funciona perfeitamente em desktop, tablet e mobile. Acesse seu escritório de qualquer lugar.",
  },
  {
    icon: <SupportAgentIcon />,
    title: "Suporte prioritário especializado",
    description:
      "Atendimento com especialistas jurídicos que entendem sua rotina. Suporte técnico e consultoria profissional.",
  },
  {
    icon: <SecurityIcon />,
    title: "Ambiente seguro e auditável",
    description:
      "Controle multiusuário avançado, trilha de auditoria completa e segurança bancária para proteger seus dados.",
  },
  {
    icon: <StorefrontIcon />,
    title: "Marketplace jurídico integrado",
    description:
      "Contrate serviços especializados, acesse modelos de documentos e encontre parceiros diretamente na plataforma.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "grey.900",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
            Diferenciais que tornam o Lawdesk único
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            Recursos desenvolvidos especificamente para atender as necessidades
            do mercado jurídico brasileiro.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "grey.800",
                }}
              >
                <Box sx={{ opacity: 0.8 }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
