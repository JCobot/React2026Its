import { createContext, useContext, useEffect, useState } from "react";

const context = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const changeTheme = () => setTheme(t => t == 'dark' ? 'light' : 'dark')
  
  useEffect(() => {
    if(theme == 'dark')
      document.body.classList.add('dark')
    else
      document.body.classList.remove('dark')
  }, [theme])

  return (
    <context.Provider value={{ theme, changeTheme }}>
      {children}
    </context.Provider>
  )
}

export default function useTheme() {
  const ctx = useContext(context)
  if (!ctx) throw new Error("ThemeProvider non usato!!!")
  return ctx
}