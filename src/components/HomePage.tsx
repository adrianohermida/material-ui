import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

// Ícones do Material-UI
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BlogIcon from "@mui/icons-material/Article";
import BusinessIcon from "@mui/icons-material/Business";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MarketingIcon from "@mui/icons-material/Campaign";
import CrmIcon from "@mui/icons-material/Groups";

import AppTheme from "../shared-theme/AppTheme";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown";

interface PageInfo {
  title: string;
  description: string;
  path: string;
  icon: React.ReactElement;
  category: string;
  featured?: boolean;
}

const pages: PageInfo[] = [
  {
    title: "CRM Dashboard",
    description:
      "Complete customer relationship management system with analytics, contacts, deals, and reporting features.",
    path: "/crm",
    icon: <CrmIcon />,
    category: "Business",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Advanced data visualization dashboard with charts, metrics, and comprehensive analytics tools.",
    path: "/dashboard",
    icon: <DashboardIcon />,
    category: "Analytics",
    featured: true,
  },
  {
    title: "Marketing Page",
    description:
      "Modern marketing landing page with hero section, features, testimonials, pricing, and FAQ.",
    path: "/marketing",
    icon: <MarketingIcon />,
    category: "Marketing",
    featured: true,
  },
  {
    title: "Blog Platform",
    description:
      "Clean and elegant blog layout with article listings, main content area, and latest posts section.",
    path: "/blog",
    icon: <BlogIcon />,
    category: "Content",
  },
  {
    title: "E-commerce Checkout",
    description:
      "Complete checkout flow with multi-step form, payment processing, and order summary.",
    path: "/checkout",
    icon: <ShoppingCartIcon />,
    category: "E-commerce",
  },
  {
    title: "Sign In",
    description:
      "Clean authentication form with email/password login and social media integration options.",
    path: "/sign-in",
    icon: <LoginIcon />,
    category: "Authentication",
  },
  {
    title: "Sign In Side",
    description:
      "Split-layout sign in page with content panel and authentication form side by side.",
    path: "/sign-in-side",
    icon: <LoginIcon />,
    category: "Authentication",
  },
  {
    title: "Sign Up",
    description:
      "User registration form with validation, terms acceptance, and social signup options.",
    path: "/sign-up",
    icon: <PersonAddIcon />,
    category: "Authentication",
  },
];

const categories = [
  "All",
  "Business",
  "Analytics",
  "Marketing",
  "Content",
  "E-commerce",
  "Authentication",
];

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPages =
    selectedCategory === "All"
      ? pages
      : pages.filter((page) => page.category === selectedCategory);

  const featuredPages = pages.filter((page) => page.featured);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />

      {/* Header */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <BusinessIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="h6"
              component="h1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Material-UI Templates
            </Typography>
          </Box>
          <ColorModeIconDropdown />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Explore All Templates
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400, maxWidth: 600, mx: "auto" }}
          >
            Comprehensive collection of production-ready Material-UI templates
            for modern web applications
          </Typography>
        </Box>

        {/* Featured Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}
          >
            Featured Templates
          </Typography>
          <Grid container spacing={3}>
            {featuredPages.map((page) => (
              <Grid item xs={12} md={4} key={page.title}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: (theme) => theme.shadows[8],
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box sx={{ color: "primary.main", mr: 2 }}>
                        {page.icon}
                      </Box>
                      <Chip
                        label={page.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {page.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {page.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      onClick={() => handleNavigate(page.path)}
                      fullWidth
                    >
                      Explore Template
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Category Filter */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}
          >
            All Templates
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: 1 }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? "primary" : "default"}
                variant={selectedCategory === category ? "filled" : "outlined"}
                sx={{ cursor: "pointer" }}
              />
            ))}
          </Stack>
        </Box>

        {/* All Templates Grid */}
        <Grid container spacing={3}>
          {filteredPages.map((page) => (
            <Grid item xs={12} sm={6} md={4} key={page.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: (theme) => theme.shadows[4],
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ color: "primary.main", mr: 2 }}>{page.icon}</Box>
                    <Chip
                      label={page.category}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mb: 1, fontWeight: 600 }}
                  >
                    {page.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {page.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleNavigate(page.path)}
                    variant="outlined"
                    fullWidth
                  >
                    View Template
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
            py: 4,
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Built with Material-UI and React Router • TypeScript & Vite
          </Typography>
        </Box>
      </Container>
    </AppTheme>
  );
}
