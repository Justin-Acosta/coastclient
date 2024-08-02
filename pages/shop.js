import styles from '../styles/shop.module.css'
import { LocationsBar } from '../components/locations-bar.js'
import { Items } from '../components/items.js'
import { PlayerProfile } from '../components/profile.js';
import { Background } from './background.js';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/state.js';
import { useRouter } from 'next/router'
import Layout from '@/components/layout.js';
import { PlayerInventory } from '@/components/player-inventory.js';
import { TackleBox } from '@/components/tackle-box.js';
import { ShopModal } from '@/components/shop-modal.js';
import Link from 'next/link.js';

export default function Shop() {

    const router = useRouter()

    const { token, setCurrentLocation, showPlayerInventory, showTackleBox } = useAppContext()

    useEffect(() => {
        setCurrentLocation('shop')
    }, [])

    if (token) {

        return (
            <div className={styles.shopContainer}>
                {showPlayerInventory || showTackleBox ? <></> : <ShopModal />}
                {showPlayerInventory ? <PlayerInventory /> : <></>}
                {showTackleBox ? <TackleBox /> : <></>}
            </div>
        )
    }

    else {
        return (
            <div className={styles.shopContainer}>
                <Link href={'/'} className='backToHome'>Back to Home</Link>
            </div>

        )
    }
}

Shop.getLayout = function getLayout(page) {
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