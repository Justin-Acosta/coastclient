import styles from '../../../styles/location.module.css'
import { LocationsBar } from '../../../components/locations-bar.js'
import { Items } from '../../../components/items.js'
import { PlayerProfile } from '../../../components/profile.js';
import { Background } from '@/pages/background.js';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../../context/state.js';
import { Router, useRouter } from 'next/router'
import Login from '@/components/login.js';
import Layout from '@/components/layout.js';
import { PlayerInventory } from '@/components/player-inventory.js';
import { TackleBox } from '@/components/tackle-box.js';

export default function Location() {

    const router = useRouter()
    const { id } = router.query

    const { token,locations, setCurrentLocation,showPlayerInventory,showTackleBox,setBackgroundPath } = useAppContext()

    useEffect(() => {
        setCurrentLocation(id)  
      },[locations])

    if (token) {

        return (
            <div className={styles.locationContainer}>
                {showPlayerInventory ? <PlayerInventory/>: <></>}
                {showTackleBox ? <TackleBox/>: <></>}
            </div>
        )
    }
}

Location.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Background />
            <LocationsBar />
            <div className='rightContainer'>
                <div className='mainContainer'>

                    <PlayerProfile />
                    {page}

                </div>
                <Items />
            </div>

        </Layout>
    )
}
