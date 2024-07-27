import styles from '../styles/shop.module.css'
import { LocationsBar } from '../components/locations-bar.js'
import { Items } from '../components/items.js'
import { PlayerProfile } from '../components/profile.js';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/state.js';
import { Router, useRouter } from 'next/router'
import Login from '@/components/login.js';
import Layout from '@/components/layout.js';

export default function Shop() {

    const router = useRouter()

    const { token } = useAppContext()

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

Shop.getLayout = function getLayout(page) {
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