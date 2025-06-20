import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router';
import dayjs from 'dayjs';
import PageContainer from './components/PageContainer';
import { useDialogs } from './hooks/useDialogs/useDialogs';
import { useNotifications } from './hooks/useNotifications/useNotifications';
import {
  deleteOne as deleteEmployee,
  getOne as getEmployee,
  type Employee,
} from './data/employees';

export default function EmployeeShow() {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const dialogs = useDialogs();
  const notifications = useNotifications();

  const [employee, setEmployee] = React.useState<Employee | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  const [hasDeleted, setHasDeleted] = React.useState(false);

  const loadData = React.useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const showData = await getEmployee(Number(employeeId));

      setEmployee(showData);
    } catch (showDataError) {
      setError(showDataError as Error);
    }
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  const handleEmployeeEdit = React.useCallback(() => {
    navigate(`/employees/edit/${employeeId}`);
  }, []);

  const handleEmployeeDelete = React.useCallback(async () => {
    const confirmed = await dialogs.confirm(
      `Do you wish to delete employee #${employeeId}?`,
      {
        title: `Delete employee?`,
        severity: 'error',
        okText: 'Delete',
        cancelText: 'Cancel',
      },
    );

    if (confirmed) {
      setIsLoading(true);
      try {
        await deleteEmployee(Number(employeeId));

        navigate('/employees');

        notifications.show('Employee deleted successfully.', {
          severity: 'success',
          autoHideDuration: 3000,
        });

        setHasDeleted(true);
      } catch (deleteError) {
        notifications.show(
          `Failed to delete employee. Reason:' ${(deleteError as Error).message}`,
          {
            severity: 'error',
            autoHideDuration: 3000,
          },
        );
      }
      setIsLoading(false);
    }
  }, []);

  const renderShow = React.useMemo(() => {
    if (isLoading) {
      return (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            m: 1,
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
    if (error) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          <Alert severity="error">{error.message}</Alert>
        </Box>
      );
    }

    if (hasDeleted) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          <Alert severity="error">This employee has been deleted</Alert>
        </Box>
      );
    }

    return employee ? (
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Name</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {employee.name}
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Age</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {employee.age}
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Join date</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {dayjs(employee.joinDate).format('MMMM D, YYYY')}
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Department</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {employee.role}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={handleEmployeeEdit}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleEmployeeDelete}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    ) : null;
  }, []);

  const pageTitle = `Employee #${employeeId}`;

  return (
    <PageContainer
      title={pageTitle}
      breadcrumbs={[
        { title: 'Home', path: '/' },
        { title: 'Employees', path: '/employees' },
        { title: pageTitle },
      ]}
    >
      <Box sx={{ display: 'flex', flex: 1, width: '100%' }}>{renderShow}</Box>
    </PageContainer>
  );
}
