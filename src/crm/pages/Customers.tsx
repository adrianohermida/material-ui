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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import AppTheme from "../../shared-theme/AppTheme";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";

// Sample customer data
const customersData = [
  {
    id: 1,
    name: "TechSolutions Inc",
    email: "contact@techsolutions.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    lastContact: "2024-01-15",
    value: "$125,000",
  },
  {
    id: 2,
    name: "Global Media Corp",
    email: "info@globalmedia.com",
    phone: "+1 (555) 234-5678",
    status: "Pending",
    lastContact: "2024-01-12",
    value: "$85,000",
  },
  {
    id: 3,
    name: "HealthCare Pro",
    email: "admin@healthcarepro.com",
    phone: "+1 (555) 345-6789",
    status: "Active",
    lastContact: "2024-01-10",
    value: "$200,000",
  },
  {
    id: 4,
    name: "RetailGiant LLC",
    email: "contact@retailgiant.com",
    phone: "+1 (555) 456-7890",
    status: "Inactive",
    lastContact: "2023-12-28",
    value: "$65,000",
  },
  {
    id: 5,
    name: "Acme Corporation",
    email: "hello@acme.com",
    phone: "+1 (555) 567-8901",
    status: "Active",
    lastContact: "2024-01-14",
    value: "$95,000",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "success";
    case "Pending":
      return "warning";
    case "Inactive":
      return "error";
    default:
      return "default";
  }
};

export default function Customers() {
  const navigate = useNavigate();

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
            <PeopleIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="h6"
              component="h1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Customers Management
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
            Customers
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Manage your customer relationships and track interactions
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add Customer
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
                  {customersData.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Customers
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
                  {customersData.filter((c) => c.status === "Active").length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Customers
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
                  {customersData.filter((c) => c.status === "Pending").length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pending
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
                  $570K
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Value
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Customers Table */}
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Customer List
            </Typography>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Customer Name</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Contact</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Status</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Last Contact</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Value</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Actions</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customersData.map((customer) => (
                    <TableRow key={customer.id} hover>
                      <TableCell>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {customer.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {customer.email}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {customer.phone}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={customer.status}
                          color={getStatusColor(customer.status) as any}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{customer.lastContact}</TableCell>
                      <TableCell>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {customer.value}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Button size="small" variant="outlined">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
