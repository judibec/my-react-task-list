import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Index from '.'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <Index />
    </ChakraProvider>
  </React.StrictMode>,
)
