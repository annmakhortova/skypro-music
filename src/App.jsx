import React, { useContext } from 'react'
import GlobalStyle from './app.styles'
import { AppRoutes } from './routes'
import { useState } from 'react'
import { userContext } from 'react'


export const useUser = () => useContext(userContext);


function App() {
  const initialToken = localStorage.getItem('token', '')
  const [token, setToken] = useState(initialToken)
  const [ user, useUser] = useContext(userContext)
  
  return (
    <userContext.Provider value={{token, user, setToken, useUser,}}>
      <AppRoutes />
      <GlobalStyle />
    </userContext.Provider>
  )
}

export default App