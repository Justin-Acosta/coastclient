import styles from '../styles/player-profile.module.css'
import { useAppContext } from '../context/state.js';
import { useState } from 'react';
import { updatePlayer } from '@/data/player.js';



export const PlayerProfile = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const { token,setToken, player,setPlayer } = useAppContext()

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const savePlayer = () => {
        updatePlayer(player)
        setIsExpanded(false)
    }

    const logOut = () => {
        localStorage.removeItem('token')
        setIsExpanded(false)
        setToken(null)
    }

    if (token) {
        return (
            <div className={styles.profileContainer} >
                <div className={styles.profile} onClick={toggleExpansion}>
                    <div className={styles.image} style={{ backgroundImage: `url('${player.image}')` }}></div>
                    <div className={styles.nickname}>{player.nickname}</div>
                </div>
                <div className={`${styles.profileDropDown} ${isExpanded ? styles.expanded : styles.collapsed}`} >
                    <h3>Nickname:</h3>
                    <input
                        type='text'
                        value={player.nickname}
                        onChange={(e) => {
                            setPlayer({ ...player, nickname: e.target.value })
                        }}
                    />
                    <button onClick={savePlayer}>Save</button>
                    <button onClick={logOut}>Log Out</button>
                </div>
            </div>
        )
    }
}