import { alpha } from '@mui/material/styles';

import { menuItemClasses } from '@mui/material/MenuItem';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { iconButtonClasses } from '@mui/material/IconButton';
import { checkboxClasses } from '@mui/material/Checkbox';
import { listClasses } from '@mui/material/List';
import { gridClasses } from '@mui/x-data-grid';
import { tablePaginationClasses } from '@mui/material/TablePagination';
import { gray } from '../themePrimitives';

/* eslint-disable import/prefer-default-export */
export const dataGridCustomizations = {
  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        '--DataGrid-overlayHeight': '300px',
        overflow: 'clip',
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.background.default,
        [`& .${gridClasses.columnHeader}`]: {
          backgroundColor: theme.palette.background.paper,
        },
        [`& .${gridClasses.footerContainer}`]: {
          backgroundColor: theme.palette.background.paper,
        },
        [`& .${checkboxClasses.root}`]: {
          padding: theme.spacing(0.5),
          '& > svg': {
            fontSize: '1rem',
          },
        },
        [`& .${tablePaginationClasses.root}`]: {
          marginRight: theme.spacing(1),
          '& .MuiIconButton-root': {
            maxHeight: 32,
            maxWidth: 32,
            '& > svg': {
              fontSize: '1rem',
            },
          },
        },
      }),
      cell: ({ theme }) => ({ borderTopColor: theme.palette.divider }),
      menu: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: 'none',
        boxShadow:
          'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
        [`& .${menuItemClasses.root}`]: {
          margin: '0 4px',
        },
        [`& .${listItemIconClasses.root}`]: {
          marginRight: 0,
        },
        [`& .${listClasses.root}`]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
        ...theme.applyStyles('dark', {
          boxShadow:
            'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
        }),
      }),
      row: ({ theme }) => ({
        '&:last-of-type': { borderBottom: `1px solid ${theme.palette.divider}` },
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-selected': {
          background: theme.palette.action.selected,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }),
      iconButtonContainer: ({ theme }) => ({
        [`& .${iconButtonClasses.root}`]: {
          border: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
          '&:active': {
            backgroundColor: gray[200],
          },
          ...theme.applyStyles('dark', {
            color: gray[50],
            '&:hover': {
              backgroundColor: gray[800],
            },
            '&:active': {
              backgroundColor: gray[900],
            },
          }),
        },
      }),
      menuIconButton: ({ theme }) => ({
        border: 'none',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: gray[100],
        },
        '&:active': {
          backgroundColor: gray[200],
        },
        ...theme.applyStyles('dark', {
          color: gray[50],
          '&:hover': {
            backgroundColor: gray[800],
          },
          '&:active': {
            backgroundColor: gray[900],
          },
        }),
      }),
      filterForm: ({ theme }) => ({
        gap: theme.spacing(1),
      }),
      columnsManagementHeader: ({ theme }) => ({
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
      }),
      columnHeaderTitleContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
      },
      columnHeaderDraggableContainer: { paddingRight: 2 },
    },
  },
};
