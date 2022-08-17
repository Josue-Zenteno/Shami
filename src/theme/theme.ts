import { createTheme } from '@mui/material/styles';
import { colors, fonts } from 'Theme/index';

export const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: 'px'
  },
  palette: {
    mode: 'light',
    common: {},
    primary: {
      main: colors.primaryMain,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.primaryContrast
    },
    secondary: {
      main: colors.secondaryMain,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: colors.secondaryContrast
    },
    error: {
      main: colors.errorMain,
      light: colors.errorLight,
      dark: colors.errorDark,
      contrastText: colors.errorContrast
    },
    warning: {
      main: colors.warningMain,
      light: colors.warningLight,
      dark: colors.warningDark,
      contrastText: colors.warningContrast
    },
    info: {
      main: colors.infoMain,
      light: colors.infoLight,
      dark: colors.infoDark,
      contrastText: colors.infoContrast
    },
    success: {
      main: colors.successMain,
      light: colors.successLight,
      dark: colors.successDark,
      contrastText: colors.successContrast
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      disabled: colors.textDisabled
    },
    background: {
      paper: colors.backgroundPaper,
      default: colors.backgroundDefault
    },
    action: {
      active: colors.actionActive,
      hover: colors.actionHover,
      hoverOpacity: 0,
      selected: colors.actionSelected,
      selectedOpacity: 0,
      disabled: colors.actionDisabled,
      disabledOpacity: 0,
      focus: colors.actionFocus,
      focusOpacity: 0,
      activatedOpacity: 0
    }
  },
  shape: {
    borderRadius: 5
  },
  typography: {
    fontFamily: fonts,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: fonts,
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167
    },
    h2: {
      fontFamily: fonts,
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2
    },
    h3: {
      fontFamily: fonts,
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.167
    },
    h4: {
      fontFamily: fonts,
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235
    },
    h5: {
      fontFamily: fonts,
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334
    },
    h6: {
      fontFamily: fonts,
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6
    },
    subtitle1: {
      fontFamily: fonts,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75
    },
    subtitle2: {
      fontFamily: fonts,
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57
    },
    body1: {
      fontFamily: fonts,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5
    },
    body2: {
      fontFamily: fonts,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43
    },
    button: {
      fontFamily: fonts,
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      textTransform: 'none'
    },
    caption: {
      fontFamily: fonts,
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66
    },
    overline: {
      fontFamily: fonts,
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      textTransform: 'none'
    }
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
});
