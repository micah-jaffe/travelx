import {
  createMuiTheme
} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const rawTheme = createMuiTheme({
  palette: {

    // tan
    // primary: {
    //   light: '#ffffff',
    //   main: '#eae7dc',
    //   dark: '#b8b5aa',
    // },

    // green
    // primary: {
    //   light: '#bfb76e',
    //   main: '#8d8741',
    //   dark: '#5e5a15',
    // },
    // blue
    primary: {
      light: '#95cdef',
      main: '#649cbc',
      dark: '#326e8c',
    },
    // primary: {
    //   light: '#69696a',
    //   main: '#659dbd',
    //   dark: '#1e1e1f',
    // },
    // pink
    // secondary: {
    //   light: '#ff8c7b',
    //   main: '#e85a4f',
    //   dark: '#b02626',
    // },
    // panera blue
    // secondary: {
    //   light: '#95cdef',
    //   main: '#649cbc',
    //   dark: '#326e8c',
    // },
    // panera green
    secondary: {
      light: '#bfb76e',
      main: '#8d8741',
      dark: '#5e5a15',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      dark: green[700],
    },
    text: {
      primary: "#000000",
      secondary: "rgba(0, 0, 0, 0.54)"
    }
  },
  typography: {
    // fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    // fontFamilySecondary: "'Roboto Condensed', sans-serif",
    // fontFamilySecondary: "'Raleway', sans-serif",
    fontFamilySecondary: "'Oswald', sans-serif",
    fontFamily: "'Roboto', sans-serif",
    useNextVariants: true,
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase',
  letterSpacing: "2px"
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;