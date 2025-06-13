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
import LinearProgress from "@mui/material/LinearProgress";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import AppTheme from "../../shared-theme/AppTheme";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";

// Sample deals data
const dealsData = [
  {
    id: 1,
    title: "Cloud Infrastructure Setup",
    company: "TechSolutions Inc",
    value: "$125,000",
    stage: "Negotiation",
    probability: 75,
    closeDate: "2024-02-15",
    priority: "high",
  },
  {
    id: 2,
    title: "Website Redesign Project",
    company: "Global Media Corp",
    value: "$85,000",
    stage: "Proposal",
    probability: 60,
    closeDate: "2024-02-28",
    priority: "medium",
  },
  {
    id: 3,
    title: "EHR System Implementation",
    company: "HealthCare Pro",
    value: "$200,000",
    stage: "Discovery",
    probability: 45,
    closeDate: "2024-03-15",
    priority: "high",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    company: "RetailGiant LLC",
    value: "$65,000",
    stage: "Closed Won",
    probability: 100,
    closeDate: "2024-01-30",
    priority: "low",
  },
  {
    id: 5,
    title: "CRM Integration",
    company: "Acme Corporation",
    value: "$95,000",
    stage: "Qualification",
    probability: 30,
    closeDate: "2024-04-01",
    priority: "medium",
  },
];

const getStageColor = (stage: string) => {
  switch (stage) {
    case "Closed Won":
      return "success";
    case "Negotiation":
      return "warning";
    case "Proposal":
      return "info";
    case "Discovery":
      return "primary";
    case "Qualification":
      return "secondary";
    default:
      return "default";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "error";
    case "medium":
      return "warning";
    case "low":
      return "success";
    default:
      return "default";
  }
};

export default function Deals() {
  const navigate = useNavigate();

  const totalValue = dealsData.reduce((sum, deal) => {
    const value = parseInt(deal.value.replace(/[$,]/g, ""));
    return sum + value;
  }, 0);

  const wonDeals = dealsData.filter((deal) => deal.stage === "Closed Won");
  const activeDeals = dealsData.filter((deal) => deal.stage !== "Closed Won");

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
            <HandshakeIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="h6"
              component="h1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Deals Management
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
            Sales Deals
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Track and manage your sales pipeline
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add Deal
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
                  {dealsData.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Deals
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
                  {wonDeals.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Closed Won
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
                  {activeDeals.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Deals
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  color="text.primary"
                  sx={{ fontWeight: 700 }}
                >
                  ${(totalValue / 1000).toFixed(0)}K
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Pipeline
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Deals Grid */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {dealsData.map((deal) => (
            <Grid item xs={12} md={6} lg={4} key={deal.id}>
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, flexGrow: 1 }}
                    >
                      {deal.title}
                    </Typography>
                    <Chip
                      label={deal.priority}
                      size="small"
                      color={getPriorityColor(deal.priority) as any}
                      variant="outlined"
                    />
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {deal.company}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="h5"
                      color="primary"
                      sx={{ fontWeight: 700 }}
                    >
                      {deal.value}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body2">Probability</Typography>
                      <Typography variant="body2">
                        {deal.probability}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={deal.probability}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Chip
                      label={deal.stage}
                      color={getStageColor(deal.stage) as any}
                      size="small"
                    />
                    <Typography variant="caption" color="text.secondary">
                      Close: {deal.closeDate}
                    </Typography>
                  </Box>

                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<TrendingUpIcon />}
                  >
                    View Details
                  </Button>
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
              label="Contacts"
              onClick={() => navigate("/crm/contacts")}
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
