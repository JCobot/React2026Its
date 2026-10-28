import { createContext, useContext, useState } from "react";

const context = createContext(null)

export function UserProvider({ children }) {
  const [user,setUser] = useState('')

  return (
    <context.Provider value={{ user,setUser }}>
      {children}
    </context.Provider>
  )
}

export default function useUser() {
  const ctx = useContext(context)
  if(!ctx) throw new Error("UserProvider non usato!!!")
  return ctx
}