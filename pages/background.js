import styles from '../styles/background.module.css';
import { useRouter } from 'next/router.js';
import { useAppContext } from '../context/state.js';
import { useState,useEffect } from 'react';


export const Background = () => {

    const [backgroundPath,setBackgroundPath] = useState()

    const router = useRouter()

    const { locations, currentLocation } = useAppContext()

    useEffect(() => {
        if (currentLocation) {
            if (currentLocation == 'title') {
                setBackgroundPath('http://localhost:8000/media/location/title.gif')
            }
            else if (currentLocation == 'shop') {
                setBackgroundPath('http://localhost:8000/media/location/shop.gif')
            }
            else {
                const foundLocation = locations.find((loc) => loc.id === currentLocation)
                setBackgroundPath(`http://localhost:8000/${foundLocation?.image}`)
            }
        }
    },[currentLocation])

    return (
                <div 
                className={styles.backgroundContainer}
                style={{ backgroundImage: `url('${backgroundPath}')` }}
                ></div>
    )
}