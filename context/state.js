import { createContext, useContext, useEffect, useState } from 'react';
import { getPlayer, updatePlayer, getTackleBox, getPlayerInventory } from '../data/player.js';
import { getLocations } from '../data/locations.js'
import { getShopInventory } from '../data/shop.js'
import { getFishTypes } from '@/data/fish-types.js';
import { useRouter } from "next/router"

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [token, setToken] = useState("")
  const [player, setPlayer] = useState({})
  const [tackleBox, setTackleBox] = useState([])
  const [playerInventory, setPlayerInventory] = useState([])
  const [shopInventory, setShopInventory] = useState([])
  const [locations, setLocations] = useState([])
  const [fishTypes, setFishTypes] = useState([])
  const [currentLocation, setCurrentLocation] = useState('')
  const [currentBait,setCurrentBait] = useState(0)
  const [showTackleBox,setShowTackleBox] = useState(false)
  const [showPlayerInventory,setShowPlayerInventory] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  useEffect(() => {
    if (token) {
      getPlayer().then((res) => setPlayer(res))
    }
  }, [token])

  useEffect(() => {
    if (token) {
      getTackleBox().then((res) => setTackleBox(res))
    }
  }, [token])

  useEffect(() => {
    if (token) {
      getPlayerInventory().then((res) => setPlayerInventory(res))
    }
  }, [token])
  
  useEffect(() => {
    if (token) {
      getShopInventory().then((res) => setShopInventory(res))
    }
  }, [token])

  useEffect(() => {
    if (token) {
      getLocations().then((res) => setLocations(res))
    }
  }, [token])

  useEffect(() => {
    if (token) {
      getFishTypes().then((res) => setFishTypes(res))
    }
  }, [token])

  return (
    <AppContext.Provider value={{ 
      token, 
      player, 
      tackleBox, 
      playerInventory, 
      shopInventory, 
      locations, 
      fishTypes,
      currentLocation,
      currentBait,
      tackleBox,
      showTackleBox,
      showPlayerInventory,
      setToken, 
      setPlayer,
      setTackleBox,
      setPlayerInventory,
      setShopInventory,
      setLocations,
      setFishTypes,
      setCurrentLocation,
      setCurrentBait,
      setShowTackleBox,
      setShowPlayerInventory
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
