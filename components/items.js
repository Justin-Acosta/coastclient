import styles from '../styles/items.module.css'
import { useState } from 'react'

export const Items = () => {
    // useState for expanded/collapsed state
    const [isExpanded, setIsExpanded] = useState(true);

    // Function to toggle the expanded state
    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className={styles.itemsContainer}>
            <div className={`${styles.itemsBar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
                <div className={styles.expandButton} onClick={toggleExpansion}>
                    {isExpanded ? "▼" : "▲"}
                </div>
            </div>
        </div>
    )
}