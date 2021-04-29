import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'

import { Routes } from './routes'
import { AuthProvider } from './contexts/AuthContext'
import { SideBarDrawerProvider } from './contexts/SideBarDrawerContext'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthProvider>
          <SideBarDrawerProvider>
            <Routes />
          </SideBarDrawerProvider>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
