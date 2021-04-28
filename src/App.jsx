import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'

import { Routes } from './routes'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
