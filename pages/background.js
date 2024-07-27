import styles from '../styles/background.module.css';


import { useAppContext } from '../context/state.js';


export const Background = () => {

    const { token } = useAppContext()

    return (
                <div className={styles.backgroundContainer}></div>
    )
}

