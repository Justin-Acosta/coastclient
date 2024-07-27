import styles from '../styles/items.module.css'
import { useState,useEffect } from 'react'
import { useAppContext } from '@/context/state.js'

export const Items = () => {

    const { token } = useAppContext()

    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpansion = () => {
            setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.itemsContainer}>

            <div className={`${styles.itemsBar} ${isExpanded ? styles.expanded : styles.collapsed}`}>

                <div className={styles.expandButton} onClick={toggleExpansion}>
                    {isExpanded ? "▼" : "▲"}
                </div>

                <div className={styles.itemBoxContainer}>
                    <div className={`${styles.itemBox} ${styles.tackleBox}`}>
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url('http://localhost:8000/media/box/tackle-box.jpg')` }}
                        ></div>
                    </div>
                    <div className={`${styles.itemBox} ${styles.tackleBox}`}>
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url('http://localhost:8000/media/box/player-inventory.jpg')` }}
                        ></div>
                    </div>
                </div>

            </div>
        </div>
    )
}