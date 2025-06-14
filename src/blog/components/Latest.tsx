import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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
      <Typography variant="caption">10 Jun 2024</Typography>
    </Box>
  );
}

const latestPosts = [
  {
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop",
    tag: "Marco Legal",
    title: "LGPD na prática: implementação em escritórios de advocacia",
    description:
      "Guia completo para adequação dos escritórios à Lei Geral de Proteção de Dados, incluindo procedimentos, documentação e tecnologias necessárias.",
    authors: [
      { name: "Dra. Laura Rodrigues", avatar: "/static/images/avatar/1.jpg" },
    ],
    date: "10 Jun 2024",
  },
  {
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
    tag: "Processo Digital",
    title: "PJe e Processo Eletrônico: maximizando eficiência",
    description:
      "Estratégias e ferramentas para otimizar o trabalho com o Processo Judicial Eletrônico e outras plataformas de processo digital.",
    authors: [
      { name: "Dr. Roberto Martins", avatar: "/static/images/avatar/2.jpg" },
    ],
    date: "08 Jun 2024",
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop",
    tag: "Gestão",
    title: "ROI em tecnologia jurídica: medindo o retorno do investimento",
    description:
      "Como calcular e demonstrar o retorno sobre investimento em soluções tecnológicas para o escritório de advocacia.",
    authors: [
      { name: "Dr. Felipe Nunes", avatar: "/static/images/avatar/3.jpg" },
    ],
    date: "05 Jun 2024",
  },
  {
    img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=200&fit=crop",
    tag: "Inteligência Artificial",
    title: "ChatGPT e IA generativa: oportunidades e riscos para advogados",
    description:
      "Análise prática do uso de inteligência artificial generativa na advocacia, incluindo casos de uso, limitações e considerações éticas.",
    authors: [
      { name: "Dra. Camila Torres", avatar: "/static/images/avatar/4.jpg" },
    ],
    date: "02 Jun 2024",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    tag: "Marketing Jurídico",
    title:
      "Marketing digital ético para advogados: do compliance ao crescimento",
    description:
      "Estratégias de marketing digital que respeitam as normas da OAB e ajudam a construir uma marca jurídica sólida e confiável.",
    authors: [
      { name: "Dr. Thiago Alves", avatar: "/static/images/avatar/5.jpg" },
    ],
    date: "30 Mai 2024",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
    tag: "Segurança",
    title: "Cibersegurança em escritórios: protegendo dados sensíveis",
    description:
      "Melhores práticas de segurança cibernética específicas para o ambiente jurídico, incluindo proteção de dados de clientes.",
    authors: [
      { name: "Dra. Patricia Cunha", avatar: "/static/images/avatar/6.jpg" },
    ],
    date: "28 Mai 2024",
  },
];

export default function Latest() {
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
    <div>
      <Typography variant="h2" gutterBottom>
        Artigos Mais Recentes
      </Typography>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
        {latestPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === index ? "Mui-focused" : ""}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                alt={post.title}
                image={post.img}
                sx={{
                  aspectRatio: "16 / 9",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {post.tag}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {post.title}
                </Typography>
                <StyledTypography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {post.description}
                </StyledTypography>
              </SyledCardContent>
              <Author authors={post.authors} />
            </SyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
