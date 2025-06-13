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
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import SaveIcon from "@mui/icons-material/Save";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import BusinessIcon from "@mui/icons-material/Business";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

import AppTheme from "../../shared-theme/AppTheme";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);

  // Form states
  const [profile, setProfile] = React.useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@company.com",
    phone: "+1 (555) 123-4567",
    department: "Sales",
    title: "Sales Manager",
  });

  const [notifications, setNotifications] = React.useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    dealUpdates: true,
    taskReminders: true,
    weeklyReports: false,
  });

  const [companySettings, setCompanySettings] = React.useState({
    companyName: "Your Company Inc",
    industry: "Technology",
    timezone: "UTC-8 (Pacific Time)",
    currency: "USD",
    fiscalYearStart: "January",
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleProfileChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setProfile((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleNotificationChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setNotifications((prev) => ({ ...prev, [field]: event.target.checked }));
    };

  const handleCompanyChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCompanySettings((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSave = () => {
    // Simulate save operation
    console.log("Settings saved:", { profile, notifications, companySettings });
    alert("Settings saved successfully!");
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
            <SettingsIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="h6"
              component="h1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              CRM Settings
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
            Settings
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Manage your account preferences and system configuration
          </Typography>
        </Box>

        <Card>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab icon={<PersonIcon />} label="Profile" />
              <Tab icon={<NotificationsIcon />} label="Notifications" />
              <Tab icon={<SecurityIcon />} label="Security" />
              <Tab icon={<BusinessIcon />} label="Company" />
              <Tab
                icon={<IntegrationInstructionsIcon />}
                label="Integrations"
              />
            </Tabs>
          </Box>

          {/* Profile Settings */}
          <CustomTabPanel value={tabValue} index={0}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Profile Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={profile.firstName}
                  onChange={handleProfileChange("firstName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={profile.lastName}
                  onChange={handleProfileChange("lastName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={profile.email}
                  onChange={handleProfileChange("email")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  value={profile.phone}
                  onChange={handleProfileChange("phone")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Department"
                  value={profile.department}
                  onChange={handleProfileChange("department")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Job Title"
                  value={profile.title}
                  onChange={handleProfileChange("title")}
                />
              </Grid>
            </Grid>
          </CustomTabPanel>

          {/* Notification Settings */}
          <CustomTabPanel value={tabValue} index={1}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Notification Preferences
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Email Notifications"
                  secondary="Receive notifications via email"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.emailNotifications}
                    onChange={handleNotificationChange("emailNotifications")}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Push Notifications"
                  secondary="Receive browser push notifications"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.pushNotifications}
                    onChange={handleNotificationChange("pushNotifications")}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="SMS Notifications"
                  secondary="Receive text message notifications"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.smsNotifications}
                    onChange={handleNotificationChange("smsNotifications")}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Deal Updates"
                  secondary="Notify when deals are updated"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.dealUpdates}
                    onChange={handleNotificationChange("dealUpdates")}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Task Reminders"
                  secondary="Remind about upcoming tasks"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.taskReminders}
                    onChange={handleNotificationChange("taskReminders")}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Weekly Reports"
                  secondary="Receive weekly performance reports"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.weeklyReports}
                    onChange={handleNotificationChange("weeklyReports")}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </CustomTabPanel>

          {/* Security Settings */}
          <CustomTabPanel value={tabValue} index={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Security Settings
            </Typography>
            <Stack spacing={3}>
              <Button variant="outlined" sx={{ alignSelf: "flex-start" }}>
                Change Password
              </Button>
              <Button variant="outlined" sx={{ alignSelf: "flex-start" }}>
                Enable Two-Factor Authentication
              </Button>
              <Button variant="outlined" sx={{ alignSelf: "flex-start" }}>
                View Login History
              </Button>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                Last login: January 15, 2024 at 9:30 AM from IP: 192.168.1.100
              </Typography>
            </Stack>
          </CustomTabPanel>

          {/* Company Settings */}
          <CustomTabPanel value={tabValue} index={3}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Company Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  value={companySettings.companyName}
                  onChange={handleCompanyChange("companyName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Industry"
                  value={companySettings.industry}
                  onChange={handleCompanyChange("industry")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Timezone"
                  value={companySettings.timezone}
                  onChange={handleCompanyChange("timezone")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Currency"
                  value={companySettings.currency}
                  onChange={handleCompanyChange("currency")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Fiscal Year Start"
                  value={companySettings.fiscalYearStart}
                  onChange={handleCompanyChange("fiscalYearStart")}
                />
              </Grid>
            </Grid>
          </CustomTabPanel>

          {/* Integrations */}
          <CustomTabPanel value={tabValue} index={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Integrations
            </Typography>
            <Stack spacing={2}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Email Integration</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Connect your email to sync contacts and conversations
                  </Typography>
                  <Button variant="outlined">Configure</Button>
                </CardContent>
              </Card>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Calendar Integration</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Sync meetings and appointments with your calendar
                  </Typography>
                  <Button variant="outlined">Configure</Button>
                </CardContent>
              </Card>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Accounting Software</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Connect to QuickBooks, Xero, or other accounting platforms
                  </Typography>
                  <Button variant="outlined">Configure</Button>
                </CardContent>
              </Card>
            </Stack>
          </CustomTabPanel>

          {/* Save Button */}
          <Box sx={{ p: 3, borderTop: 1, borderColor: "divider" }}>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSave}
              size="large"
            >
              Save Changes
            </Button>
          </Box>
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
              label="Reports"
              onClick={() => navigate("/crm/reports")}
              variant="outlined"
              clickable
            />
          </Stack>
        </Box>
      </Container>
    </AppTheme>
  );
}
