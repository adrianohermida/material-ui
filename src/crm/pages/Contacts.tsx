import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";

import AppTheme from "../../shared-theme/AppTheme";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";

// Sample contacts data
const contactsData = [
  {
    id: 1,
    name: "John Smith",
    title: "CTO",
    company: "TechSolutions Inc",
    email: "john.smith@techsolutions.com",
    phone: "+1 (555) 123-4567",
    type: "Decision Maker",
    lastContact: "2024-01-15",
    avatar: "JS",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "Global Media Corp",
    email: "sarah.j@globalmedia.com",
    phone: "+1 (555) 234-5678",
    type: "Influencer",
    lastContact: "2024-01-12",
    avatar: "SJ",
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    title: "Chief Medical Officer",
    company: "HealthCare Pro",
    email: "m.chen@healthcarepro.com",
    phone: "+1 (555) 345-6789",
    type: "Decision Maker",
    lastContact: "2024-01-10",
    avatar: "MC",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Operations Manager",
    company: "RetailGiant LLC",
    email: "e.rodriguez@retailgiant.com",
    phone: "+1 (555) 456-7890",
    type: "User",
    lastContact: "2023-12-28",
    avatar: "ER",
  },
  {
    id: 5,
    name: "David Wilson",
    title: "VP of Sales",
    company: "Acme Corporation",
    email: "d.wilson@acme.com",
    phone: "+1 (555) 567-8901",
    type: "Champion",
    lastContact: "2024-01-14",
    avatar: "DW",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    title: "IT Manager",
    company: "TechSolutions Inc",
    email: "l.thompson@techsolutions.com",
    phone: "+1 (555) 678-9012",
    type: "Technical Contact",
    lastContact: "2024-01-13",
    avatar: "LT",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Decision Maker":
      return "error";
    case "Champion":
      return "success";
    case "Influencer":
      return "warning";
    case "Technical Contact":
      return "info";
    case "User":
      return "primary";
    default:
      return "default";
  }
};

export default function Contacts() {
  const navigate = useNavigate();

  const contactsByType = contactsData.reduce(
    (acc, contact) => {
      acc[contact.type] = (acc[contact.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

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
            <ContactsIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="h6"
              component="h1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Contacts Management
            </Typography>
          </Box>
          <ColorModeIconDropdown />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Contacts
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Manage your business contacts and relationships
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add Contact
            </Button>
            <Button variant="outlined" startIcon={<SearchIcon />}>
              Search
            </Button>
            <Button variant="outlined" startIcon={<FilterListIcon />}>
              Filter
            </Button>
          </Stack>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  {contactsData.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Contacts
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  color="error.main"
                  sx={{ fontWeight: 700 }}
                >
                  {contactsByType["Decision Maker"] || 0}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Decision Makers
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  color="success.main"
                  sx={{ fontWeight: 700 }}
                >
                  {contactsByType["Champion"] || 0}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Champions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  color="warning.main"
                  sx={{ fontWeight: 700 }}
                >
                  {contactsByType["Influencer"] || 0}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Influencers
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Contacts Grid */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {contactsData.map((contact) => (
            <Grid item xs={12} sm={6} md={4} key={contact.id}>
              <Card
                sx={{
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: (theme) => theme.shadows[4],
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "primary.main",
                        mr: 2,
                        width: 56,
                        height: 56,
                        fontSize: "1.25rem",
                        fontWeight: 600,
                      }}
                    >
                      {contact.avatar}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {contact.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {contact.title}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <BusinessIcon
                      fontSize="small"
                      sx={{ mr: 1, color: "text.secondary" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {contact.company}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <EmailIcon
                      fontSize="small"
                      sx={{ mr: 1, color: "text.secondary" }}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.8rem" }}
                    >
                      {contact.email}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <PhoneIcon
                      fontSize="small"
                      sx={{ mr: 1, color: "text.secondary" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {contact.phone}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Chip
                      label={contact.type}
                      color={getTypeColor(contact.type) as any}
                      size="small"
                      variant="outlined"
                    />
                    <Typography variant="caption" color="text.secondary">
                      Last: {contact.lastContact}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1}>
                    <Button variant="outlined" size="small" fullWidth>
                      View
                    </Button>
                    <Button variant="contained" size="small" fullWidth>
                      Contact
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Navigation Links */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Quick Navigation
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: 1 }}
          >
            <Chip
              label="CRM Dashboard"
              onClick={() => navigate("/crm")}
              variant="outlined"
              clickable
            />
            <Chip
              label="Customers"
              onClick={() => navigate("/crm/customers")}
              variant="outlined"
              clickable
            />
            <Chip
              label="Deals"
              onClick={() => navigate("/crm/deals")}
              variant="outlined"
              clickable
            />
            <Chip
              label="Tasks"
              onClick={() => navigate("/crm/tasks")}
              variant="outlined"
              clickable
            />
            <Chip
              label="Reports"
              onClick={() => navigate("/crm/reports")}
              variant="outlined"
              clickable
            />
            <Chip
              label="Settings"
              onClick={() => navigate("/crm/settings")}
              variant="outlined"
              clickable
            />
          </Stack>
        </Box>
      </Container>
    </AppTheme>
  );
}
