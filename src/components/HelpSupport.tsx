import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BookIcon from "@mui/icons-material/Book";
import BugReportIcon from "@mui/icons-material/BugReport";
import ForumIcon from "@mui/icons-material/Forum";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import VideocamIcon from "@mui/icons-material/Videocam";

import AppTheme from "../shared-theme/AppTheme";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown";

const helpCategories = [
  {
    title: "Getting Started",
    icon: <BookIcon />,
    description: "Learn the basics and get up and running quickly",
    color: "primary",
  },
  {
    title: "Technical Support",
    icon: <SupportAgentIcon />,
    description: "Get help with technical issues and bugs",
    color: "error",
  },
  {
    title: "Community Forum",
    icon: <ForumIcon />,
    description: "Connect with other users and share knowledge",
    color: "success",
  },
  {
    title: "Contact Us",
    icon: <EmailIcon />,
    description: "Reach out to our support team directly",
    color: "warning",
  },
];

const faqData = [
  {
    question: "How do I navigate between different templates?",
    answer:
      "You can navigate between templates using the top navigation menu or by visiting /templates to see all available options. Each template has its own dedicated route.",
  },
  {
    question: "How do I access the CRM features?",
    answer:
      "The CRM system is available at /crm and includes dedicated pages for customers (/crm/customers), deals (/crm/deals), contacts (/crm/contacts), tasks (/crm/tasks), reports (/crm/reports), and settings (/crm/settings).",
  },
  {
    question: "Can I customize the themes and colors?",
    answer:
      "Yes! Each template includes light and dark mode support. You can toggle between themes using the theme switcher in the top-right corner of most pages.",
  },
  {
    question: "How do I build this for production?",
    answer:
      "Run 'npm run build' to create a production build. The built files will be in the 'dist' directory and ready for deployment.",
  },
  {
    question: "Where can I find the source code for each component?",
    answer:
      "All components are organized in the 'src' directory by feature: blog/, checkout/, crm/, dashboard/, marketing-page/, sign-in/, etc. Each contains the main component and supporting files.",
  },
];

export default function HelpSupport() {
  const navigate = useNavigate();
  const [contactForm, setContactForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitContact = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate form submission
    console.log("Contact form submitted:", contactForm);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <AppTheme>
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
            <IconButton
              onClick={() => navigate("/")}
              sx={{ color: "primary.main" }}
            >
              <HomeIcon />
            </IconButton>
            <HelpOutlineIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="h6"
              component="h1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Help & Support
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
            How can we help you?
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400, maxWidth: 600, mx: "auto" }}
          >
            Find answers to your questions, get technical support, or connect
            with our community
          </Typography>
        </Box>

        {/* Help Categories */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {helpCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 3 }}>
                  <Box
                    sx={{
                      color: `${category.color}.main`,
                      mb: 2,
                      fontSize: "3rem",
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 3 }}>
                  <Button variant="outlined" color={category.color as any}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FAQ Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 4, textAlign: "center" }}
          >
            Frequently Asked Questions
          </Typography>
          {faqData.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Contact Form */}
        <Card sx={{ mb: 6 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}
            >
              Contact Support
            </Typography>
            <Box component="form" onSubmit={handleSubmitContact}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ minWidth: 200 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Quick Access
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: 1 }}
          >
            <Chip
              icon={<HomeIcon />}
              label="Home"
              onClick={() => navigate("/")}
              variant="outlined"
              clickable
            />
            <Chip
              icon={<BookIcon />}
              label="All Templates"
              onClick={() => navigate("/templates")}
              variant="outlined"
              clickable
            />
            <Chip
              icon={<SupportAgentIcon />}
              label="CRM Dashboard"
              onClick={() => navigate("/crm")}
              variant="outlined"
              clickable
            />
            <Chip
              icon={<BugReportIcon />}
              label="Analytics"
              onClick={() => navigate("/dashboard")}
              variant="outlined"
              clickable
            />
          </Stack>
        </Box>

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
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Need immediate assistance?
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">support@company.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <VideocamIcon fontSize="small" />
              <Typography variant="body2">Live Chat</Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </AppTheme>
  );
}
