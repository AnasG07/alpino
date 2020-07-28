/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import colors from './colors';
import padding from './padding';
import typography, { fontFamily } from './typography';

/**
 * Default Theme Shadows
 */
const depth0 = 'none';
const depth1 = `0 0 1rem -0.5rem ${colors.black50}`;
const depth2 = `0 0 1rem ${colors.black50}`;

/**
 * Default Theme Breakpoints
 */
const breakpoint_xs = 320;
const breakpoint_sm = 600;
const breakpoint_md = 960;
const breakpoint_lg = 1280;
const breakpoint_xl = 1920;

/**
 * Default Theme
 */
const standardBorderRadius = '2px';
const duration = '250ms';
const ease = 'cubic-bezier(0.785, 0.135, 0.15, 0.86)';

/**
 * Default Theme Elements
 */
const rui_components = {
  Input: {
    backgroundColor_dark: colors.white,
    backgroundColor_default: colors.black02,
    borderColor_default: colors.black20,
    borderColor_error: colors.red,
    borderColor_focus: colors.teal,
    borderColor_success: colors.teal,
    borderRadius: standardBorderRadius,
    clearButtonColor: colors.coolGrey,
    clearButtonLargeBackgroundColor: colors.white,
    clearButtonLargeBorderColor: colors.coolGrey,
    color_default: colors.coolGrey500,
    color_disabled: colors.black25,
    color_error: colors.red,
    color_focus: colors.coolGrey500,
    color_success: colors.black55,
    fontFamily,
    fontSize: '14px',
    horizontalPadding: padding.ten,
    iconColor_default: colors.black55,
    iconColor_disabled: colors.black25,
    iconColor_error: colors.red,
    iconColor_success: colors.forestGreen,
    iconWrapperSize: '1.429em',
    lineHeight: 1,
    placeholderColor: colors.black20,
    verticalPadding: padding.eight,
  },

  Textarea: {
    clearButtonFontSize: '12px',
    clearButtonPadding: '10px',
    height: '60px',
    iconRight: 0,
    iconTop: padding.ten,
    lineHeight: '1.5',
  },
};

export default {
  rui_breakpoints: {
    xs: breakpoint_xs,
    sm: breakpoint_sm,
    md: breakpoint_md,
    lg: breakpoint_lg,
    xl: breakpoint_xl,
  },
  rui_components,
  rui_typography: typography,
};
