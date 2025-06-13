import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import GavelIcon from "@mui/icons-material/Gavel";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GroupsIcon from "@mui/icons-material/Groups";

const items = [
  {
    icon: <GavelIcon />,
    title: "Painel Jurídico",
    description:
      "Automação completa de processos jurídicos com acompanhamento de prazos, petições e andamentos processuais integrados.",
    imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/dash-light.png")`,
    imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/dash-dark.png")`,
  },
  {
    icon: <AccountTreeIcon />,
    title: "CRM Personalizado",
    description:
      "Pipelines e funis customizáveis para gestão de clientes, prospects e oportunidades específicas do mercado jurídico.",
    imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/mobile-dark.png")`,
  },
  {
    icon: <AttachMoneyIcon />,
    title: "Gestão Financeira",
    description:
      "DRE jurídico integrado, controle de honorários, assinaturas recorrentes e faturamento automatizado.",
    imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/devices-dark.png")`,
  },
  {
    icon: <DescriptionIcon />,
    title: "Documentos Inteligentes",
    description:
      "Geração automática de petições, contratos e documentos jurídicos com assinatura eletrônica integrada.",
    imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/dash-light.png")`,
    imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/dash-dark.png")`,
  },
  {
    icon: <PsychologyIcon />,
    title: "IA Jurídica",
    description:
      "Copiloto automatizado com análise preditiva, sugestões inteligentes e automação de tarefas repetitivas.",
    imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/mobile-dark.png")`,
  },
  {
    icon: <GroupsIcon />,
    title: "Comunidade Jurídica",
    description:
      "Marketplace integrado com parcerias, modelos de documentos e oportunidades reais de networking.",
    imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || "https://mui.com"}/static/images/templates/templates-images/devices-dark.png")`,
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        borderColor: (theme.vars || theme).palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("dark", {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 280,
            backgroundImage: "var(--items-imageLight)",
            ...theme.applyStyles("dark", {
              backgroundImage: "var(--items-imageDark)",
            }),
          })}
          style={
            items[selectedItemIndex]
              ? ({
                  "--items-imageLight": items[selectedItemIndex].imageLight,
                  "--items-imageDark": items[selectedItemIndex].imageDark,
                } as any)
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: "text.primary", fontWeight: "medium" }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: "100%", md: "60%" } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary", fontWeight: 700 }}
        >
          Recursos que impulsionam a advocacia moderna
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
        >
          Uma plataforma completa que integra todas as necessidades do seu
          escritório jurídico, desde gestão de processos até inteligência
          artificial, em um só lugar.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: (theme.vars || theme).palette.action
                        .hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: "action.selected",
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                      gap: 1,
                      textAlign: "left",
                      textTransform: "none",
                      color: "text.secondary",
                    },
                    selectedItemIndex === index && {
                      color: "text.primary",
                    },
                  ]}
                >
                  <Box
                    sx={{
                      color:
                        selectedItemIndex === index
                          ? "primary.main"
                          : "inherit",
                    }}
                  >
                    {icon}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {title}
                  </Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { xs: "100%", md: "70%" },
            height: "var(--items-image-height)",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={(theme) => ({
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundImage: "var(--items-imageLight)",
                ...theme.applyStyles("dark", {
                  backgroundImage: "var(--items-imageDark)",
                }),
              })}
              style={
                items[selectedItemIndex]
                  ? ({
                      "--items-imageLight": items[selectedItemIndex].imageLight,
                      "--items-imageDark": items[selectedItemIndex].imageDark,
                    } as any)
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
