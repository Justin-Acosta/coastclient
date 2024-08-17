import styles from '../styles/background.module.css';
import { useRouter } from 'next/router.js';
import { useAppContext } from '../context/state.js';
import { useState,useEffect } from 'react';


export const Background = () => {

    const API_URL = "http://coastapi-3odjm.ondigitalocean.app"

    const [backgroundPath,setBackgroundPath] = useState()

    const router = useRouter()

    const { locations, currentLocation } = useAppContext() || {}

    useEffect(() => {
        if (currentLocation && locations) {
            if (currentLocation == 'title') {
                setBackgroundPath(`${API_URL}/media/location/title.gif`)
            }
            else if (currentLocation == 'shop') {
                setBackgroundPath(`${API_URL}/media/location/shop.gif`)
            }
            else {
                const foundLocation = locations.find((loc) => loc.id === parseInt(currentLocation))
                setBackgroundPath(`${API_URL}/${foundLocation?.image}`)
            }
        }
    },[currentLocation, locations])

    return (
                <div 
                className={styles.backgroundContainer}
                style={{ backgroundImage: `url('${backgroundPath}')` }}
                ></div>
    )
}

export default Background