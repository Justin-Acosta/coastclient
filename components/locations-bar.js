import styles from '../styles/locations-bar.module.css'
import { useState } from 'react'

export const LocationsBar = () => {
    // useState for expanded/collapsed state
    const [isExpanded, setIsExpanded] = useState(true);

    // Function to toggle the expanded state
    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className={`${styles.locationsBar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
            <div className={styles.expandButton} onClick={toggleExpansion}>
                {isExpanded ? "◄" : "►"}
            </div>
        </div>
    )
}
