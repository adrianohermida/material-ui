import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const userTestimonials = [
  {
    avatar: <Avatar alt="Dr. Ana Silva" src="/api/placeholder/40/40" />,
    name: "Dra. Ana Silva",
    occupation: "Advogada Criminalista",
    testimonial:
      "O Lawdesk elevou meu escritório a outro patamar — tudo centralizado, moderno e com IA! A automação de documentos me poupa horas todos os dias.",
  },
  {
    avatar: <Avatar alt="Carlos Roberto" src="/api/placeholder/40/40" />,
    name: "Carlos Roberto",
    occupation: "Sócio - Silva & Associados",
    testimonial:
      "Desde que adotamos o Lawdesk, cortamos 40% das tarefas manuais no atendimento. O CRM jurídico é simplesmente perfeito para nossa rotina.",
  },
  {
    avatar: <Avatar alt="Mariana Costa" src="/api/placeholder/40/40" />,
    name: "Mariana Costa",
    occupation: "Advogada Trabalhista",
    testimonial:
      "Melhor CRM jurídico que já usamos — simples, responsivo e extremamente poderoso. A IA jurídica realmente funciona!",
  },
  {
    avatar: <Avatar alt="Dr. João Santos" src="/api/placeholder/40/40" />,
    name: "Dr. João Santos",
    occupation: "Diretor Jurídico",
    testimonial:
      "A gestão financeira integrada transformou nossa operação. Agora temos controle total sobre honorários e receitas.",
  },
  {
    avatar: <Avatar alt="Patrícia Oliveira" src="/api/placeholder/40/40" />,
    name: "Patrícia Oliveira",
    occupation: "Advogada Empresarial",
    testimonial:
      "O marketplace jurídico abriu novas oportunidades de networking. Encontrei parceiros e modelos que otimizaram meu trabalho.",
  },
  {
    avatar: <Avatar alt="Dr. Rafael Mendes" src="/api/placeholder/40/40" />,
    name: "Dr. Rafael Mendes",
    occupation: "Advogado Imobiliário",
    testimonial:
      "Documentos inteligentes e assinatura eletrônica integrada aceleraram nossos contratos em 60%. Impressionante!",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(1),
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
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

const StyledCardContent = styled(CardContent)({
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
});

export default function Testimonials() {
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
    <Container
      id="testimonials"
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
          O que dizem nossos usuários
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Mais de 5.000 advogados e escritórios já confiam no Lawdesk para
          modernizar e automatizar sua prática jurídica.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <StyledCard
              variant="outlined"
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === index ? "Mui-focused" : ""}
            >
              <StyledCardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  "{testimonial.testimonial}"
                </Typography>
              </StyledCardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
