import styles from '../styles/locations-bar.module.css'
import { useAppContext } from '../context/state.js';
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'

export const LocationsBar = () => {

    const API_URL = "https://coastapi-3odjm.ondigitalocean.app"

    const router = useRouter()

    const { token,player,setPlayer,locations,setCurrentLocation } = useAppContext()

    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        { token ? setIsExpanded(true) : setIsExpanded(false) }
    }, [token])

    const toggleExpansion = () => {
            setIsExpanded(!isExpanded);
    };

    const goToShop = () => {
        router.push('/shop')
    }

    const goToLocation = (e) => {
        // setCurrentLocation(parseInt(e.currentTarget.id))
        router.push(`/location/${parseInt(e.currentTarget.id)}`)
    }

    return (
        <div className={`${styles.locationsBar} ${isExpanded ? styles.expanded : styles.collapsed}`}>

            <div className={styles.expandButton} onClick={toggleExpansion}>
                {isExpanded ? "◄" : "►"}
            </div>

            <div className={styles.locationBoxContainer}>

                <div onClick={goToShop} href={`/shop`} className={`${styles.locationBox} ${styles.shop}`}>
                    <div className={styles.text}>Shop</div>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url('${API_URL}/media/location/shop.gif')` }}
                    ></div>
                </div>

                {locations.map((location) => (
                    <div onClick={goToLocation} id={location.id} key={location.id} className={styles.locationBox}>
                        <div className={styles.text}>{location.name}</div>
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url('${API_URL}/${location.image}')` }}
                        ></div>
                    </div>
                ))} 
            </div>
        </div>
    )
}
