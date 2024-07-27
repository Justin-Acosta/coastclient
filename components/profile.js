import styles from '../styles/player-profile.module.css'
import { useAppContext } from '../context/state.js';
import { useState } from 'react';



export const PlayerProfile = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const { token, player } = useAppContext()

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    if (token) {
        return (
            <div className={styles.profileContainer} >
                <div className={styles.profile} onClick={toggleExpansion}>
                    <div className={styles.image} style={{ backgroundImage: `url('${player.image}')` }}></div>
                    <div className={styles.nickname}>{player.nickname}</div>
                </div>
                <div className={`${styles.profileDropDown} ${isExpanded ? styles.expanded : styles.collapsed}`} >
                    <h3>Nickname:</h3>
                    <input />
                    <button>Save</button>
                    <button>Log Out</button>
                </div>
            </div>
        )
    }
}