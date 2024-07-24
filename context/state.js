import { createContext, useContext, useEffect, useState } from 'react';
import { getPlayer } from '../data/player.js';
import { useRouter } from "next/router"

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [player, setPlayer] = useState({})
    const [token, setToken] = useState("")
    const router = useRouter()
  
    useEffect(() => {
      setToken(localStorage.getItem('token'))
    }, [])
  
    useEffect(() => {
      const authRoutes = ['/login', '/register']
      if (token) {
        localStorage.setItem('token', token)
        if (authRoutes.includes(router.pathname)) {
          getPlayer().then((playerData) => {
            if (playerData) {
              setPlayer(playerData)
            }
          })
        }
      }
    }, [token])

  return (
    <AppContext.Provider value={{ player, token, setToken, setPlayer }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
