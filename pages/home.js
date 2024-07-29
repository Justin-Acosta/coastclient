import styles from '../styles/home.module.css';
import Login from '@/components/login.js';
import { useAppContext } from '../context/state.js';
import { useEffect } from 'react';
import { PlayerInventory } from '@/components/player-inventory.js';
import { TackleBox } from '@/components/tackle-box.js';


export const Home = () => {

    const { token,setCurrentLocation, showPlayerInventory, showTackleBox } = useAppContext()

    useEffect(() => {
      setCurrentLocation('title')  
    },[])

    return (

                    <div className={styles.homeContainer}>
                        {showPlayerInventory || showTackleBox? <></> : <div className={styles.title}>Coast</div>}
                        {token ? <></>: <Login />}
                        {showPlayerInventory ? <PlayerInventory/>: <></>}
                        {showTackleBox ? <TackleBox/>: <></>}
                    </div>

    )
}
