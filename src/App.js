import React from 'react'
import GlobalStyle from './app.styles'
import { AppRoutes } from './routes'
import { useState } from 'react'
import { userContext } from './context/userContext'

function App() {
  const initialToken = localStorage.getItem('token', '')
  const [token, setToken] = useState(initialToken)
  
  return (
    <userContext.Provider value={{token, setToken}}>
      <AppRoutes />
      <GlobalStyle />
    </userContext.Provider>
  )
}

export default App