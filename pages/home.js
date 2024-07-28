import styles from '../styles/home.module.css';
import Login from '@/components/login.js';
import { useAppContext } from '../context/state.js';
import { useEffect } from 'react';


export const Home = () => {

    const { token,setCurrentLocation } = useAppContext()

    useEffect(() => {
      setCurrentLocation('title')  
    },[])

    return (

                    <div className={styles.homeContainer}>
                        <div className={styles.title}>Coast</div>
                        {token ? <></>: <Login />}
                    </div>

    )
}
