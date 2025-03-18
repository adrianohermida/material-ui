import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache as createCache } from '@mui/material-nextjs/v15-pagesRouter';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { useTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import globalSelector from './globalSelector';

// Cache for the rtl version of the styles
const cacheRtl = createCache({
  key: 'rtl',
  prepend: true,
  enableCssLayer: true,
  stylisPlugins: [prefixer, rtlPlugin, globalSelector],
});

export default function StyledEngineProvider(props) {
  const { children, cacheLtr } = props;
  const theme = useTheme();

  const rtl = theme.direction === 'rtl';
  const emotionCache = theme.direction === 'rtl' ? cacheRtl : cacheLtr;

  return (
    <StyleSheetManager stylisPlugins={rtl ? [rtlPlugin] : []}>
      <CacheProvider value={emotionCache}>
        <GlobalStyles styles="@layer theme, docsearch, mui, utilities;" />
        {children}
      </CacheProvider>
    </StyleSheetManager>
  );
}

StyledEngineProvider.propTypes = {
  cacheLtr: PropTypes.object.isRequired,
  children: PropTypes.node,
};
