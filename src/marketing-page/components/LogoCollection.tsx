import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

// Escritórios jurídicos fictícios que confiam no Lawdesk
const logoPlaceholders = [
  {
    name: "Silva & Associados",
    width: 120,
    height: 40,
  },
  {
    name: "Costa Advocacia",
    width: 110,
    height: 40,
  },
  {
    name: "Oliveira Jurídico",
    width: 130,
    height: 40,
  },
  {
    name: "Santos & Partners",
    width: 125,
    height: 40,
  },
  {
    name: "Mendes Law Firm",
    width: 115,
    height: 40,
  },
  {
    name: "Advocacia Lima",
    width: 105,
    height: 40,
  },
];

export default function LogoCollection() {
  const theme = useTheme();

  return (
    <Box id="logoCollection" sx={{ py: { xs: 4, sm: 8 } }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{
          color: "text.secondary",
          mb: 4,
          fontSize: "0.875rem",
          fontWeight: 500,
        }}
      >
        Mais de 5.000 advogados confiam no Lawdesk
      </Typography>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, sm: 4 },
          flexWrap: "wrap",
          mt: 0.5,
          opacity: 0.6,
        }}
      >
        {logoPlaceholders.map((logo, index) => (
          <Grid key={index} item>
            <Box
              sx={{
                width: logo.width,
                height: logo.height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid",
                borderColor:
                  theme.palette.mode === "light" ? "grey.300" : "grey.700",
                borderRadius: 1,
                backgroundColor:
                  theme.palette.mode === "light" ? "grey.50" : "grey.800",
                transition: "all 0.3s ease",
                "&:hover": {
                  opacity: 1,
                  borderColor: "primary.main",
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "primary.50"
                      : "primary.900",
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textAlign: "center",
                  px: 1,
                }}
              >
                {logo.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Estatísticas */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              5.000+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Advogados ativos
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              1.200+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Escritórios jurídicos
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              98%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Satisfação dos usuários
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
