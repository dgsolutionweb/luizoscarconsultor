import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Box } from '@mui/material'
import theme from './theme'
import BusinessCard from './components/BusinessCard'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground />
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <BusinessCard />
      </Box>
    </ThemeProvider>
  )
}

export default App
