import styles from '../../../styles/location.module.css'
import { LocationsBar } from '../../../components/locations-bar.js'
import { Items } from '../../../components/items.js'
import { PlayerProfile } from '../../../components/profile.js';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../../context/state.js';
import { Router, useRouter } from 'next/router'
import Login from '@/components/login.js';
import Layout from '@/components/layout.js';

export default function Location() {

    const router = useRouter()
    const { id } = router.query

    const { token, locations,player,setPlayer } = useAppContext()

    const [currentLocation, setCurrentLocation] = useState({})

    useEffect(() => {
        if (token && locations) {
            const foundLocation = locations.find((location) => location.id == id)
            setCurrentLocation(foundLocation)
            setPlayer({...player, location: foundLocation.id})
        }
    }, [locations])

    if (token) {

        return (


                <div className='rightContainer'>
                    <div className='mainContainer'>
                        <PlayerProfile />
                    </div>

                </div>

        )
    }
}

Location.getLayout = function getLayout(page) {
    return (
        <Layout>
            <div className='homeBackground'>
                <LocationsBar />
                <div className='rightContainer'>
                    <div className='mainContainer'>
                        {page}
                    </div>
                    <Items />
                </div>
            </div>
        </Layout>
    )
}
