import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

const theme = extendTheme({
  cssVarPrefix: 'demo',
  defaultColorScheme: 'dark',
  cssRule: '.demo_%s-mode-by-default',
});

export default function DarkModeByDefault() {
  return (
    <CssVarsProvider
      // the props below are specific to this demo,
      // you might not need them in your app.
      //
      theme={theme}
      colorSchemeNode={null}
      //
      // the local storage key to use
      modeStorageKey="demo_dark-mode-by-default"
      //
      // set as root provider
      disableNestedContext
    >
      <div className="demo_dark-mode-by-default">
        <Sheet sx={{ px: 3, py: 1.5, borderRadius: 'sm' }}>
          <Typography
            component="div"
            endDecorator={
              <Chip variant="outlined" color="primary" size="sm">
                Default
              </Chip>
            }
            sx={{ fontSize: 'lg' }}
          >
            Dark mode
          </Typography>
        </Sheet>
      </div>
    </CssVarsProvider>
  );
}
