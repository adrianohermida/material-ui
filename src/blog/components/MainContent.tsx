import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Typography variant="caption">{authors[0].name}</Typography>
      </Box>
      <Typography variant="caption">14 Jun 2024</Typography>
    </Box>
  );
}

export function Search() {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "25ch" } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Buscar artigos..."
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "buscar artigos jurídicos",
        }}
      />
    </FormControl>
  );
}

const cardData = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    tag: "Tecnologia Jurídica",
    title: "Revolucionando a advocacia com ferramentas tecnológicas de ponta",
    description:
      "Descubra como as mais recentes ferramentas de tecnologia jurídica estão transformando o trabalho dos advogados, aumentando a produtividade e melhorando a qualidade dos serviços prestados aos clientes.",
    authors: [
      { name: "Dr. João Silva", avatar: "/static/images/avatar/1.jpg" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop",
    tag: "Inovação",
    title: "Recursos inovadores de IA que impulsionam o sucesso jurídico",
    description:
      "Explore os principais recursos de inteligência artificial do Lawdesk que estão ajudando escritórios de advocacia a alcançar seus objetivos, desde análise de contratos até previsão de resultados processuais.",
    authors: [
      { name: "Dra. Maria Santos", avatar: "/static/images/avatar/2.jpg" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
    tag: "Gestão",
    title: "A jornada da transformação digital dos escritórios jurídicos",
    description:
      "Acompanhe como escritórios de advocacia estão navegando pela transformação digital, implementando soluções CRM e ferramentas de colaboração para modernizar suas práticas.",
    authors: [
      { name: "Dr. Pedro Costa", avatar: "/static/images/avatar/3.jpg" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop",
    tag: "Produtividade",
    title: "Como otimizar o fluxo de trabalho jurídico com automação",
    description:
      "Aprenda técnicas práticas para automatizar tarefas repetitivas no escritório, desde geração de documentos até controle de prazos processuais.",
    authors: [
      { name: "Dra. Ana Oliveira", avatar: "/static/images/avatar/4.jpg" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop",
    tag: "Analytics",
    title: "Business Intelligence aplicado ao direito: métricas que importam",
    description:
      "Descubra como usar dados e analytics para tomar decisões estratégicas no escritório, acompanhar performance e identificar oportunidades de crescimento.",
    authors: [
      { name: "Dr. Carlos Mendes", avatar: "/static/images/avatar/5.jpg" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=200&fit=crop",
    tag: "Compliance",
    title: "Compliance e gestão de riscos no ambiente jurídico digital",
    description:
      "Entenda as melhores práticas para manter a conformidade e gerenciar riscos ao adotar tecnologias digitais no escritório de advocacia.",
    authors: [
      { name: "Dra. Fernanda Lima", avatar: "/static/images/avatar/6.jpg" },
    ],
  },
];

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Blog Jurídico Lawdesk
        </Typography>
        <Typography>
          Mantenha-se atualizado com as últimas tendências em tecnologia
          jurídica, dicas de produtividade e insights sobre o futuro da
          advocacia.
        </Typography>
      </div>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          gap: 1,
          width: { xs: "100%", md: "fit-content" },
          overflow: "auto",
        }}
      >
        <Search />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          gap: 4,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "row",
            gap: 3,
            overflow: "auto",
          }}
        >
          <Chip
            onClick={() => console.log("Todas as categorias")}
            size="medium"
            label="Todas as categorias"
          />
          <Chip
            onClick={() => console.log("Tecnologia")}
            size="medium"
            label="Tecnologia"
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
          <Chip
            onClick={() => console.log("Inovação")}
            size="medium"
            label="Inovação"
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
          <Chip
            onClick={() => console.log("Gestão")}
            size="medium"
            label="Gestão"
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
          <Chip
            onClick={() => console.log("Produtividade")}
            size="medium"
            label="Produtividade"
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Search />
        </Box>
      </Box>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={6}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? "Mui-focused" : ""}
          >
            <CardMedia
              component="img"
              alt="Tecnologia jurídica de ponta"
              image={cardData[0].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[0].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[0].title}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {cardData[0].description}
              </StyledTypography>
            </SyledCardContent>
            <Author authors={cardData[0].authors} />
          </SyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(1)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 1 ? "Mui-focused" : ""}
          >
            <CardMedia
              component="img"
              alt="IA jurídica inovadora"
              image={cardData[1].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[1].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[1].title}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {cardData[1].description}
              </StyledTypography>
            </SyledCardContent>
            <Author authors={cardData[1].authors} />
          </SyledCard>
        </Grid>
        {cardData.slice(2, 6).map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(index + 2)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === index + 2 ? "Mui-focused" : ""}
            >
              <CardMedia
                component="img"
                alt={card.title}
                image={card.img}
                sx={{
                  aspectRatio: "16 / 9",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {card.tag}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <StyledTypography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {card.description}
                </StyledTypography>
              </SyledCardContent>
              <Author authors={card.authors} />
            </SyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
