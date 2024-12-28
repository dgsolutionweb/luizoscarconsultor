import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/raleway/600.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4fc3f7',
      light: '#8bf6ff',
      dark: '#0093c4',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a237e',
      secondary: 'rgba(26, 35, 126, 0.87)',
    },
    divider: 'rgba(26, 35, 126, 0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", serif',
      fontWeight: 700,
      fontSize: '2.2rem',
      letterSpacing: '-0.01em',
      marginBottom: '0.5rem',
      background: 'linear-gradient(45deg, #1a237e 30%, #4fc3f7 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 2px 10px rgba(26, 35, 126, 0.1)',
    },
    h2: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 600,
      fontSize: '1.1rem',
      letterSpacing: '0.15em',
      lineHeight: 1.4,
      textTransform: 'uppercase',
      color: '#1a237e',
    },
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      fontSize: '1.1rem',
      letterSpacing: '0.02em',
      color: '#1a237e',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.95rem',
      letterSpacing: '0.01em',
      lineHeight: 1.6,
      fontWeight: 400,
      color: '#1a237e',
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      letterSpacing: '0.01em',
      lineHeight: 1.5,
      fontWeight: 400,
      color: '#1a237e',
    },
    subtitle1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#1a237e',
    },
    caption: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 400,
      letterSpacing: '0.03em',
      opacity: 0.8,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 32px rgba(26, 35, 126, 0.12)',
          border: '1px solid rgba(26, 35, 126, 0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
          backgroundColor: 'rgba(79, 195, 247, 0.08)',
          color: '#1a237e',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(79, 195, 247, 0.15)',
            transform: 'translateY(-1px)',
          },
        },
        label: {
          letterSpacing: '0.02em',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(26, 35, 126, 0.08)',
          '&::before, &::after': {
            borderColor: 'rgba(26, 35, 126, 0.08)',
          },
        },
      },
    },
  },
});

export default theme;
