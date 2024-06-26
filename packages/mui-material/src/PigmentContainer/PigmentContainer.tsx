'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { OverridableComponent, OverrideProps } from '@mui/types';
// @ts-ignore
import Container from '@pigment-css/react/Container';
import capitalize from '@mui/utils/capitalize';
import composeClasses from '@mui/utils/composeClasses';
import generateUtilityClass from '@mui/utils/generateUtilityClass';
import { SxProps, Breakpoint } from '@mui/system';
import { Theme } from '../styles';
import { ContainerClasses } from '../Container/containerClasses';
import { useDefaultProps } from '../DefaultPropsProvider';

export interface PigmentContainerOwnProps {
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ContainerClasses>;
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters?: boolean;
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed?: boolean;
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth?: Breakpoint | false;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export interface PigmentContainerTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'div',
> {
  props: AdditionalProps & PigmentContainerOwnProps;
  defaultComponent: RootComponent;
}

export type PigmentContainerProps<
  RootComponent extends React.ElementType = PigmentContainerTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<PigmentContainerTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};

const useUtilityClasses = (ownerState: PigmentContainerOwnProps) => {
  const { classes, fixed, disableGutters, maxWidth } = ownerState;

  const slots = {
    root: [
      'root',
      maxWidth && `maxWidth${capitalize(String(maxWidth))}`,
      fixed && 'fixed',
      disableGutters && 'disableGutters',
    ],
  };

  return composeClasses(slots, (slot) => generateUtilityClass('MuiContainer', slot), classes);
};
/**
 *
 * Demos:
 *
 * - [Container](https://next.mui.com/material-ui/react-container/)
 *
 * API:
 *
 * - [PigmentContainer API](https://next.mui.com/material-ui/api/pigment-container/)
 */
const PigmentContainer = React.forwardRef(function PigmentContainer(inProps, ref) {
  // eslint-disable-next-line material-ui/mui-name-matches-component-name
  const props = useDefaultProps({ props: inProps, name: 'MuiContainer' });
  const { className, disableGutters = false, fixed = false, maxWidth = 'lg', ...other } = props;
  const ownerState = {
    ...props,
    disableGutters,
    fixed,
    maxWidth,
  };
  const classes = useUtilityClasses(ownerState);
  return (
    <Container
      ref={ref}
      className={clsx(classes.root, className)}
      disableGutters={disableGutters}
      fixed={fixed}
      maxWidth={maxWidth}
      {...other}
    />
  );
}) as OverridableComponent<PigmentContainerTypeMap>;

PigmentContainer.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: PropTypes.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs', false]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export default PigmentContainer;
