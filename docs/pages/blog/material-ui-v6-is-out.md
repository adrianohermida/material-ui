---
title: Material UI v6 is out 🎉
description: We are so excited to announce the stable release of Material UI v6. It comes with Pigment CSS integration and a lot of improvements.
date: 2024-07-01T00:00:00.000Z
authors:
  [
    'aarongarciah',
    'brijeshb42',
    'diegoandai',
    'mnajdova',
    'samuelsycamore',
    'siriwatknp',
    'zanivan',
  ]
tags: ['Material UI', 'Product']
manualCard: true
---

Material UI v6 is now stable! We're excited to share all the updates.

## Opt-in CSS extraction via Pigment CSS

As you know, Material UI v5 uses Emotion as a default styling solution. As a runtime CSS-in-JS library, it has several trade-offs such as slower performance and larger bundle size.

With Material UI v6, we're introducing an opt-in integration with [Pigment CSS](https://github.com/mui/pigment-css), our new open-source library, that will eliminate the overhead of style recalculation while preserving similar APIs that you are already familiar with.

Since the integration is an opt-in feature, you can upgrade to v6 and continue using Emotion if you'd like. The link to the migration guide is at the end of the page.

<!-- would be nice if we have a link to a prototype page -->
<!-- a link to Next.js repo that render templates -->

### React Server Components

Once integrated with Pigment CSS, Material UI v6 provides a separate set of layout components, including `Grid`, `Container`, and `Stack`, that are compatible with React Server Components.

```jsx
import Box from '@mui/material-pigment-css/Box';
import Grid from '@mui/material-pigment-css/Grid';
import Container from '@mui/material-pigment-css/Container';
import Stack from '@mui/material-pigment-css/Stack';
```

### Built-in sx prop support

With Pigment CSS integration, all JSX elements support the `sx` prop out of the box.

```diff
- import Box from '@mui/material/Box';

- <Box component="img" sx={{ padding: 2 }} />
+ <img sx={{ padding: 2 }} />
```

:::success
Box component is **no** longer required to use the `sx` prop.
:::

## CSS theme variables

The `CssVarsProvider` has been stablized with additional improvements and features.

```diff
- import { ThemeProvider } from '@mui/material/styles';
+ import { CssVarsProvider } from '@mui/material/styles';
```

Serializable values like palette, spacing, typography, etc., are converted to CSS variables and can be accessed from `theme.vars`.

With CSS variables, you can easily integrate your preferred styling solution with Material UI.

```css title="styles.css"
.custom-card {
  background-color: var(--palette-background-default);
  color: var(--palette-text-primary);
  padding: var(--spacing-2);
  font: var(--font-body1);
}
```

### Media prefers-color-scheme

The new `extendTheme` lets you enable media [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) in one line:

<codeblock>

```js Theme
import { extendTheme, CssVarsProvider } from '@mui/material/styles';

const theme = extendTheme({
  strategy: 'media',
});

function App({ children }) {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
}
```

```css Result
:root {
  --palette-background-default: #fff;
  /* ...other variables */
}

@media (prefers-color-scheme: dark) {
  :root {
    --palette-background-default: #121212;
    /* ...other variables */
  }
}
```

</codeblock>

### Toggle between modes

To manually toggle between modes, you can specify a custom value:

<codeblock>

```js Theme
import { extendTheme, CssVarsProvider } from '@mui/material/styles';

const theme = extendTheme({
  strategy: '[data-mode-%s]', // the %s will be replaced with the mode
});

function App({ children }) {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
}
```

```css Result
:root {
  --palette-background-default: #fff;
  /* ...other variables */
}

:where([data-mode-dark]) {
  --palette-background-default: #121212;
  /* ...other variables */
}
```

</codeblock>

### Custom styles for specific modes

The new API `theme.applyStyles()` has been added to unify all supporting styling solutions, including Emotion, Styled-components and Pigment CSS.

We will provide a codemod that migrates the code like an example below:

```diff
  const StyledInput = styled(InputBase)(({ theme }) => ({
    padding: 10,
    width: '100%',
-    borderBottom: `1px solid ${
-      theme.palette.mode === 'dark' ? '#30363d' : '#eaecef'
-    }`,
+    borderBottom: `1px solid #eaecef`,
+    ...theme.applyStyles('dark', {
+      borderBottom: '1px solid #30363d',
+    })
    '& input': {
      borderRadius: 4,
-      backgroundColor: '#fff',
+     ...theme.applyStyles('dark', {
+       backgroundColor: '#0d1117',
+     })
    },
  }));
```

## Container Queries

We added support for [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) based on the existing `theme.breakpoints` API.

This feature lets you define styles based on the parent container's width instead of the viewport.

```jsx
const Component = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.containerQueries.up('sm')]: {
    flexDirection: 'row',
  },
  [theme.containerQueries('sidebar').up('400px')]: {
    flexDirection: 'row',
  },
}));
```

It also works with the `sx` prop:

```jsx
<Card
  sx={{
    '@sm': {
      flexDirection: 'row',
    },
    '@400/sidebar': {
      flexDirection: 'row',
    },
  }}
/>
```

## Stabilized Grid v2

## Revamping the free templates

Explore the new and enhanced [Material UI free templates](https://mui.com/material-ui/getting-started/templates/) to see these amazing features in action. We've fully revamped the templates to provide the perfect starting point for your project, whether you're adding sleek styles or using the template's sections.

<!-- First demo  -->

### Custom syles

The new custom styles we've added allow you to dive into the best approaches for customization or simply copy and paste some stylish elements.

<!-- Second demo -->

Stay tuned, as many more updates are coming in the upcoming months! We'd love to hear your feedback on which templates or sections you'd like to see next.

We are upgrading the [free templates](https://mui.com/material-ui/getting-started/templates/) to make them look amazing for your next project.

<!-- Add images -->

## Bundle size improvements

## Next steps

Ready to upgrade to Material UI v6? Check out the [migration guide](https://mui.com/guides/migration-v5/).

You can also explore all the updates in more detail from the links below:

- [Pigment CSS integration](/)
- [Container Queries](/)
- [CSS theme variables](/)
- [Stabilized Grid v2](/)
- [Free templates](/)
