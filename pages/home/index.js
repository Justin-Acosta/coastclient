import styles from '../../styles/home.module.css';
import { Title } from '../../components/title.js'
import { LocationsBar } from '../../components/locations-bar.js'
import { Items } from '../../components/items.js'
import { PlayerProfile } from '../../components/profile.js';
import Login from '@/components/login.js';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/state.js';
import { useRouter } from 'next/router'

export const Home = () => {

    const { token } = useAppContext()

    return (
            <div className={styles.homeBackground}>
                <LocationsBar />
                <div className='rightContainer'>
                    <div className='mainContainer'>
                        <PlayerProfile />
                        <Title />
                        {token ? <></>: <Login />}
                    </div>
                    <Items />
                </div>
            </div> 
    )
}
