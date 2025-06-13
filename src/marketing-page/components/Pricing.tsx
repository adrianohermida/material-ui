import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
  {
    title: "Essencial",
    price: "0",
    description: [
      "1 usuário",
      "CRM Jurídico básico",
      "Painel de Processos",
      "Suporte via FAQ",
      "5GB armazenamento",
    ],
    buttonText: "Começar grátis",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
  {
    title: "Profissional",
    subheader: "Mais popular",
    price: "289",
    description: [
      "Até 5 usuários",
      "CRM Jurídico completo",
      "Módulo Financeiro",
      "Assinatura Eletrônica",
      "IA Jurídica básica",
      "50GB armazenamento",
      "Suporte prioritário",
    ],
    buttonText: "Testar 30 dias grátis",
    buttonVariant: "contained",
    buttonColor: "primary",
  },
  {
    title: "Empresarial",
    price: "597",
    description: [
      "Usuários ilimitados",
      "Gestão de Equipe avançada",
      "Automação de Fluxos",
      "IA Jurídica avançada",
      "API e Integrações",
      "Armazenamento ilimitado",
      "Consultoria Personalizada",
      "Marketplace premium",
    ],
    buttonText: "Contatar vendas",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  const handleGetStarted = (tier: any) => {
    if (tier.title === "Essencial") {
      navigate("/sign-up");
    } else if (tier.title === "Profissional") {
      navigate("/sign-up");
    } else {
      navigate("/help");
    }
  };

  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography
          component="h2"
          variant="h4"
          sx={{ color: "text.primary", fontWeight: 700 }}
        >
          Planos para cada fase do seu escritório
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Escolha o plano ideal para o tamanho e necessidades do seu escritório
          jurídico. Comece grátis e evolua conforme seu crescimento.
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
      >
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Empresarial" ? 12 : 6}
            md={4}
          >
            <Card
              sx={[
                {
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  background: "linear-gradient(#033363, #021F3B)",
                  height: "100%",
                },
                tier.title === "Profissional" &&
                  ((theme) => ({
                    borderColor: "primary.main",
                    background: "linear-gradient(#033363, #021F3B)",
                    boxShadow: `0 8px 12px hsla(210, 98%, 42%, 0.2)`,
                  })),
              ]}
            >
              <Box
                sx={[
                  {
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 4,
                  },
                  tier.title === "Profissional"
                    ? { color: "grey.100" }
                    : { color: "grey.400" },
                ]}
              >
                <div>
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  <Typography variant="h2" component="h3">
                    R${tier.price}
                    <Typography component="span" variant="h6">
                      /mês
                    </Typography>
                  </Typography>
                </div>
                {tier.title === "Profissional" && (
                  <Chip
                    icon={<CheckCircleRoundedIcon />}
                    label={tier.subheader}
                    size="small"
                    sx={{
                      background: (theme) =>
                        theme.palette.mode === "light" ? "" : "none",
                      backgroundColor: "primary.contrastText",
                      "& .MuiChip-label": {
                        color: "primary.dark",
                      },
                      "& .MuiChip-icon": {
                        color: "primary.dark",
                      },
                    }}
                  />
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    py: 2,
                  }}
                >
                  {tier.description.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          width: 20,
                          color:
                            tier.title === "Profissional"
                              ? "primary.light"
                              : "primary.main",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{
                          color:
                            tier.title === "Profissional"
                              ? "grey.200"
                              : "grey.400",
                        }}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as "outlined" | "contained"}
                  color={tier.buttonColor as "primary"}
                  onClick={() => handleGetStarted(tier)}
                  sx={{
                    borderColor:
                      tier.title === "Profissional" ? "primary.light" : "",
                    color: tier.title === "Profissional" ? "primary.light" : "",
                  }}
                >
                  {tier.buttonText}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
