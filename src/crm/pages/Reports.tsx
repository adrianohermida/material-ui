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
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DownloadIcon from "@mui/icons-material/Download";
import FilterListIcon from "@mui/icons-material/FilterList";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";

import AppTheme from "../../shared-theme/AppTheme";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";

// Sample reports data
const reportsData = [
  {
    id: 1,
    name: "Sales Performance",
    description: "Monthly sales performance and revenue tracking",
    type: "Sales",
    lastUpdated: "2024-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Customer Acquisition",
    description: "Customer acquisition funnel and conversion rates",
    type: "Marketing",
    lastUpdated: "2024-01-14",
    status: "Active",
  },
  {
    id: 3,
    name: "Deal Pipeline",
    description: "Sales pipeline analysis and forecasting",
    type: "Sales",
    lastUpdated: "2024-01-13",
    status: "Active",
  },
  {
    id: 4,
    name: "Team Performance",
    description: "Individual and team productivity metrics",
    type: "Management",
    lastUpdated: "2024-01-12",
    status: "Draft",
  },
  {
    id: 5,
    name: "Customer Satisfaction",
    description: "Customer feedback and satisfaction scores",
    type: "Support",
    lastUpdated: "2024-01-11",
    status: "Active",
  },
  {
    id: 6,
    name: "Revenue Analysis",
    description: "Quarterly revenue breakdown and trends",
    type: "Finance",
    lastUpdated: "2024-01-10",
    status: "Scheduled",
  },
];

const kpiData = [
  {
    label: "Total Revenue",
    value: "$2.4M",
    change: "+12.5%",
    trend: "up",
    color: "success.main",
  },
  {
    label: "New Customers",
    value: "156",
    change: "+8.2%",
    trend: "up",
    color: "primary.main",
  },
  {
    label: "Conversion Rate",
    value: "3.2%",
    change: "-2.1%",
    trend: "down",
    color: "error.main",
  },
  {
    label: "Average Deal Size",
    value: "$15.4K",
    change: "+5.7%",
    trend: "up",
    color: "warning.main",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Sales":
      return "primary";
    case "Marketing":
      return "secondary";
    case "Management":
      return "info";
    case "Support":
      return "success";
    case "Finance":
      return "warning";
    default:
      return "default";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "success";
    case "Draft":
      return "warning";
    case "Scheduled":
      return "info";
    default:
      return "default";
  }
};

export default function Reports() {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = React.useState("30");
  const [reportType, setReportType] = React.useState("all");

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
            <AssessmentIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="h6"
              component="h1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Reports & Analytics
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
            Reports & Analytics
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Track performance metrics and generate insights
          </Typography>

          {/* Filters and Actions */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 4, flexWrap: "wrap", gap: 1 }}
          >
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Time Range</InputLabel>
              <Select
                value={timeRange}
                label="Time Range"
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <MenuItem value="7">Last 7 days</MenuItem>
                <MenuItem value="30">Last 30 days</MenuItem>
                <MenuItem value="90">Last 3 months</MenuItem>
                <MenuItem value="365">Last year</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Report Type</InputLabel>
              <Select
                value={reportType}
                label="Report Type"
                onChange={(e) => setReportType(e.target.value)}
              >
                <MenuItem value="all">All Reports</MenuItem>
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
                <MenuItem value="management">Management</MenuItem>
              </Select>
            </FormControl>

            <Button variant="outlined" startIcon={<FilterListIcon />}>
              More Filters
            </Button>
            <Button variant="contained" startIcon={<DownloadIcon />}>
              Export All
            </Button>
          </Stack>
        </Box>

        {/* KPIs */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {kpiData.map((kpi, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {kpi.label}
                    </Typography>
                    {kpi.trend === "up" ? (
                      <TrendingUpIcon color="success" fontSize="small" />
                    ) : (
                      <TrendingDownIcon color="error" fontSize="small" />
                    )}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: kpi.color, mb: 1 }}
                  >
                    {kpi.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: kpi.trend === "up" ? "success.main" : "error.main",
                      fontWeight: 500,
                    }}
                  >
                    {kpi.change}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Quick Charts */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={8}>
            <Card sx={{ height: 300 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Revenue Trend
                </Typography>
                <Box
                  sx={{
                    height: 220,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "action.hover",
                    borderRadius: 1,
                  }}
                >
                  <ShowChartIcon
                    sx={{ fontSize: 60, color: "text.secondary" }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ ml: 2 }}
                  >
                    Chart placeholder - Revenue trend over time
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 300 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Sales by Source
                </Typography>
                <Box
                  sx={{
                    height: 220,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "action.hover",
                    borderRadius: 1,
                  }}
                >
                  <PieChartIcon
                    sx={{ fontSize: 60, color: "text.secondary" }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ ml: 2 }}
                  >
                    Pie chart placeholder
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Available Reports */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Available Reports
            </Typography>
            <Grid container spacing={2}>
              {reportsData.map((report) => (
                <Grid item xs={12} md={6} key={report.id}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: (theme) => theme.shadows[2],
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {report.name}
                      </Typography>
                      <Chip
                        label={report.status}
                        size="small"
                        color={getStatusColor(report.status) as any}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {report.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Chip
                        label={report.type}
                        size="small"
                        color={getTypeColor(report.type) as any}
                        variant="outlined"
                      />
                      <Typography variant="caption" color="text.secondary">
                        Updated: {report.lastUpdated}
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={1}>
                      <Button variant="outlined" size="small">
                        View
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<DownloadIcon />}
                      >
                        Export
                      </Button>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

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
