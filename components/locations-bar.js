import styles from '../styles/locations-bar.module.css'
import { useAppContext } from '../context/state.js';
import { useState,useEffect } from 'react'
import Link from 'next/link'

export const LocationsBar = () => {

    const { token,locations } = useAppContext()

    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpansion = () => {
            setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.locationsBar} ${isExpanded ? styles.expanded : styles.collapsed}`}>

            <div className={styles.expandButton} onClick={toggleExpansion}>
                {isExpanded ? "◄" : "►"}
            </div>

            <div className={styles.locationBoxContainer}>

                <Link href={`/shop`} className={`${styles.locationBox} ${styles.shop}`}>
                    <div className={styles.text}>Shop</div>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url('http://localhost:8000/media/location/shop.gif')` }}
                    ></div>
                </Link>

                {locations.map((location) => (
                    <Link href={`/location/${location.id}`} key={location.id} className={styles.locationBox}>
                        <div className={styles.text}>{location.name}</div>
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url('http://localhost:8000/${location.image}')` }}
                        ></div>
                    </Link>
                ))} 
            </div>
        </div>
    )
}
