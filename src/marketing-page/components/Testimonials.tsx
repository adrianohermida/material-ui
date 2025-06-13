import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

const userTestimonials = [
  {
    avatar: "/static/images/avatar/1.jpg",
    name: "Remy Sharp",
    occupation: "Senior Engineer",
    company: "SyncUC",
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. It's become an indispensable part of my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    avatar: "/static/images/avatar/2.jpg",
    name: "Travis Howard",
    occupation: "Lead Product Designer",
    company: "Bern",
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    avatar: "/static/images/avatar/3.jpg",
    name: "Cindy Baker",
    occupation: "CTO",
    company: "Pinstreet",
    testimonial:
      "The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
  },
  {
    avatar: "/static/images/avatar/4.jpg",
    name: "Julia Stewart",
    occupation: "Senior Engineer",
    company: "Terra",
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  },
  {
    avatar: "/static/images/avatar/5.jpg",
    name: "John Smith",
    occupation: "Product Designer",
    company: "Schedule",
    testimonial:
      "I've tried similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  },
  {
    avatar: "/static/images/avatar/6.jpg",
    name: "Daniel Wolf",
    occupation: "CDO",
    company: "Avelire",
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },
];

const TestimonialCard = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderColor:
    theme.palette.mode === "light" ? "#e0e0e0" : theme.palette.divider,
  borderRadius: "8px",
  padding: "20px",
  height: "100%",
  minHeight: "260px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    borderColor:
      theme.palette.mode === "light" ? "#c0c0c0" : theme.palette.grey[600],
  },
}));

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      maxWidth="lg"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 5, md: 6 },
          maxWidth: "600px",
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: "text.primary",
            fontSize: { xs: "1.75rem", md: "2rem" },
          }}
        >
          Testimonials
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            fontSize: { xs: "0.95rem", md: "1rem" },
          }}
        >
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>
      </Box>

      {/* Testimonials Grid - 2 rows x 3 columns */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TestimonialCard>
              {/* Testimonial Text */}
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  lineHeight: 1.5,
                  fontSize: "0.875rem",
                  mb: 2,
                  flexGrow: 1,
                }}
              >
                {testimonial.testimonial}
              </Typography>

              {/* Author Information */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pt: 1,
                }}
              >
                {/* Left side - Avatar and Name */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.avatar}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        fontSize: "0.875rem",
                        lineHeight: 1.2,
                        mb: 0.2,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {testimonial.occupation}
                    </Typography>
                  </Box>
                </Box>

                {/* Right side - Company */}
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "text.disabled",
                    textAlign: "right",
                  }}
                >
                  {testimonial.company}
                </Typography>
              </Box>
            </TestimonialCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
