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
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import AppTheme from "../../shared-theme/AppTheme";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";

// Sample tasks data
const tasksData = [
  {
    id: 1,
    task: "Follow up with TechSolutions Inc on cloud proposal",
    completed: false,
    priority: "high",
    dueDate: "Today, 2:00 PM",
    assignee: "John Doe",
    category: "Sales",
  },
  {
    id: 2,
    task: "Prepare presentation for Global Media website project",
    completed: false,
    priority: "medium",
    dueDate: "Tomorrow, 10:00 AM",
    assignee: "Sarah Smith",
    category: "Marketing",
  },
  {
    id: 3,
    task: "Call HealthCare Pro about contract details",
    completed: false,
    priority: "high",
    dueDate: "Today, 4:30 PM",
    assignee: "Mike Johnson",
    category: "Sales",
  },
  {
    id: 4,
    task: "Update CRM implementation timeline for RetailGiant",
    completed: true,
    priority: "medium",
    dueDate: "Yesterday",
    assignee: "Emily Davis",
    category: "Implementation",
  },
  {
    id: 5,
    task: "Send proposal documents to Acme Corp",
    completed: false,
    priority: "low",
    dueDate: "Sep 28, 2023",
    assignee: "David Wilson",
    category: "Sales",
  },
  {
    id: 6,
    task: "Schedule product demo for new prospects",
    completed: false,
    priority: "medium",
    dueDate: "Next week",
    assignee: "Lisa Brown",
    category: "Marketing",
  },
  {
    id: 7,
    task: "Review and approve marketing budget",
    completed: true,
    priority: "high",
    dueDate: "Last week",
    assignee: "John Doe",
    category: "Management",
  },
  {
    id: 8,
    task: "Conduct training session for new team members",
    completed: false,
    priority: "medium",
    dueDate: "Friday, 3:00 PM",
    assignee: "Sarah Smith",
    category: "Training",
  },
];

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

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Sales":
      return "primary";
    case "Marketing":
      return "secondary";
    case "Implementation":
      return "info";
    case "Management":
      return "error";
    case "Training":
      return "warning";
    default:
      return "default";
  }
};

export default function Tasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = React.useState(tasksData);

  const handleToggle = (id: number) => () => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);
  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "high" && !task.completed,
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
            <TaskIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="h6"
              component="h1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Tasks Management
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
            Tasks & Activities
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Manage your daily tasks and track progress
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add Task
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
                  {tasks.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Tasks
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
                  {pendingTasks.length}
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
                  color="success.main"
                  sx={{ fontWeight: 700 }}
                >
                  {completedTasks.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Completed
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
                  {highPriorityTasks.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  High Priority
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Tasks List */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              All Tasks
            </Typography>
            <List sx={{ width: "100%" }}>
              {tasks.map((task) => {
                const labelId = `checkbox-list-label-${task.id}`;

                return (
                  <ListItem
                    key={task.id}
                    disablePadding
                    sx={{
                      border: 1,
                      borderColor: "divider",
                      borderRadius: 1,
                      mb: 1,
                      backgroundColor: task.completed
                        ? "action.hover"
                        : "background.paper",
                    }}
                  >
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(task.id)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={task.completed}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>

                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          id={labelId}
                          variant="body1"
                          sx={{
                            textDecoration: task.completed
                              ? "line-through"
                              : "none",
                            color: task.completed
                              ? "text.secondary"
                              : "text.primary",
                            fontWeight: task.completed ? 400 : 500,
                            mb: 0.5,
                          }}
                        >
                          {task.task}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            flexWrap: "wrap",
                          }}
                        >
                          <Chip
                            label={task.priority}
                            size="small"
                            color={getPriorityColor(task.priority) as any}
                            variant="outlined"
                            sx={{
                              height: 20,
                              "& .MuiChip-label": { px: 1, py: 0 },
                            }}
                          />
                          <Chip
                            label={task.category}
                            size="small"
                            color={getCategoryColor(task.category) as any}
                            variant="filled"
                            sx={{
                              height: 20,
                              "& .MuiChip-label": { px: 1, py: 0 },
                            }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            Due: {task.dueDate}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Assignee: {task.assignee}
                          </Typography>
                        </Box>
                      </Box>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
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
