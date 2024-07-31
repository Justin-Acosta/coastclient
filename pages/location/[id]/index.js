import styles from '../../../styles/location.module.css'
import { LocationsBar } from '../../../components/locations-bar.js'
import { Items } from '../../../components/items.js'
import { PlayerProfile } from '../../../components/profile.js';
import { Background } from '@/pages/background.js';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../../context/state.js';
import { useRouter } from 'next/router'
import Layout from '@/components/layout.js';
import { PlayerInventory } from '@/components/player-inventory.js';
import { TackleBox } from '@/components/tackle-box.js';
import { FishModal } from '@/components/fish-modal.js';
import { catchFish } from '@/data/locations.js';
import { getTackleBox } from '@/data/player.js';

export default function Location() {

    const [caughtFish,setCaughtFish] = useState(false)
    const [showCaughtFish,setShowCaughtFish] = useState(false)
    

    const router = useRouter()


    const { token,setTackleBox, showPlayerInventory,showTackleBox, currentLocation, currentBait } = useAppContext()

    const castPole = () => {
        const requestObject = {
            location: parseInt(currentLocation),
            bait: currentBait.bait.id
        }
        catchFish(requestObject).then(
            (res) => {
                setCaughtFish(res)
                setShowCaughtFish(true)
                return getTackleBox()
            }).then(
                (tackleBox) => setTackleBox(tackleBox))
    }

    if (token) {

        return (
            <div className={styles.locationContainer}>
                {showPlayerInventory || showTackleBox ? <></> : 
                    <div className={styles.catchingContainer}>
                        {currentBait ? <>{showCaughtFish ? 
                        <FishModal caughtFish={caughtFish} setShowCaughtFish={setShowCaughtFish}/> :
                        <div className={styles.fishCatchingBox} onClick={castPole}></div>
                        }</> :
                        <div className={styles.selectBait}>select a bait</div>}
                    </div>
                }
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
