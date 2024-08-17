import styles from '../styles/items.module.css'
import { useState, useEffect } from 'react'
import { useAppContext } from '@/context/state.js'
import { PlayerInventory } from './player-inventory.js'

export const Items = () => {

    const API_URL = "https://coastapi-3odjm.ondigitalocean.app"

    const { token, showPlayerInventory, setShowPlayerInventory, showTackleBox, setShowTackleBox, currentBait } = useAppContext()

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        { token ? setIsExpanded(true) : setIsExpanded(false) }
    }, [token])

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleShowPlayerInventory = () => {
        if (showTackleBox) {
            setShowTackleBox(false)
        }
        setShowPlayerInventory(!showPlayerInventory)
    }

    const toggleShowTackleBox = () => {
        if (showPlayerInventory) {
            setShowPlayerInventory(false)
        }
        setShowTackleBox(!showTackleBox)
    }

    return (
        <div className={styles.itemsContainer}>

            <div className={`${styles.itemsBar} ${isExpanded ? styles.expanded : styles.collapsed}`}>

                <div className={styles.expandButton} onClick={toggleExpansion}>
                    {isExpanded ? "▼" : "▲"}
                </div>

                <div className={styles.itemBoxContainer}>
                    <div className={`${styles.itemBox} ${styles.tackleBox}`} onClick={toggleShowTackleBox}>
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url('${API_URL}/media/box/tackle-box.jpg')` }}
                        ></div>
                    </div>
                    <div className={`${styles.itemBox} ${styles.tackleBox}`} onClick={toggleShowPlayerInventory}>
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url('${API_URL}/media/box/player-inventory.jpg')` }}
                        ></div>
                    </div>
                </div>

            </div>
        </div>
    )
}