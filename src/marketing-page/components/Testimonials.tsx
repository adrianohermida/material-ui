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
  padding: "24px",
  backgroundColor: theme.palette.background.paper,
  border: "1px solid",
  borderColor: theme.palette.grey[200],
  borderRadius: "8px",
  height: "100%",
  minHeight: "240px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "border-color 0.2s ease",
  "&:hover": {
    borderColor: theme.palette.grey[300],
  },
  ...(theme.palette.mode === "dark" && {
    borderColor: theme.palette.grey[700],
    "&:hover": {
      borderColor: theme.palette.grey[600],
    },
  }),
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
          mb: { xs: 6, md: 8 },
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
          }}
        >
          Testimonials
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>
      </Box>

      {/* Testimonials Grid */}
      <Grid container spacing={3} sx={{ maxWidth: "1000px" }}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TestimonialCard>
              {/* Testimonial Text */}
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  lineHeight: 1.5,
                  mb: 3,
                  fontSize: "14px",
                }}
              >
                {testimonial.testimonial}
              </Typography>

              {/* Author Info */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "auto",
                }}
              >
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
                        fontSize: "14px",
                        lineHeight: 1.2,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontSize: "12px",
                        lineHeight: 1.2,
                      }}
                    >
                      {testimonial.occupation}
                    </Typography>
                  </Box>
                </Box>

                {/* Company Logo */}
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "text.disabled",
                    letterSpacing: "0.05em",
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
