import React, { createContext, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const Context = createContext();
export const useModeContext = () => {
  return useContext(Context)
}

export const ContextProvider = ({ children }) => {
const [darkMode, setDarkMode] = useState(true)
  return (
    <Context.Provider
      value={{darkMode,setDarkMode}}>
      {children}
    </Context.Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
          <App />
    </ContextProvider>
  </React.StrictMode>,
)
