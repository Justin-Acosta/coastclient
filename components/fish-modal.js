import styles from '../styles/fish-modal.module.css'
import { useState,useEffect } from 'react'
import { useAppContext } from '@/context/state.js'
import { keepFish } from '@/data/locations.js'
import { getPlayerInventory, getTackleBox } from '@/data/player.js'

export const FishModal = ({caughtFish,setShowCaughtFish}) => {

    const { tackleBox, setShowTackleBox, showPlayerInventory, currentBait, setCurrentBait,setPlayerInventory } = useAppContext()

    const throwBack = () => {
        if (currentBait.quantity - 1 == 0) {
            setCurrentBait(false)
        }
        else {
            setCurrentBait({...currentBait, quantity:currentBait.quantity -= 1})
        }
        setShowCaughtFish(false)
    }

    const keep = () => {
        keepFish({fish:caughtFish.id}).then(() => {

            return getPlayerInventory()
        }).then((res) => setPlayerInventory(res)).then(() =>{
            if (currentBait.quantity - 1 == 0) {
                setCurrentBait(false)
            }
            else {
                setCurrentBait({...currentBait, quantity:currentBait.quantity -= 1})
            }
            setShowCaughtFish(false)
        })
    }

    return (
        <div className='modalWindow'>

            <div></div>
            <div className={styles.topBar}>
            </div>

            <div className={styles.displayArea}>
                <div className={styles.name}>You caught a {caughtFish.name} !</div>
                <div 
                className={styles.fishImage}
                style={{ backgroundImage: `url('http://localhost:8000/${caughtFish?.image}')` }}
                ></div>
            </div>

            <div className={styles.stats}>
                <div className={styles.column}>
                    <div className={styles.info}>Size: {caughtFish.size} in.</div>
                    <div className={styles.info}>Price: ${caughtFish.price}</div>
                    <div className={styles.info}>Type: {caughtFish.fish_type.name}</div>
                </div>
                <div className={styles.column}>
                    <button className={styles.button} onClick={throwBack}>Throw Back</button>
                    <button className={styles.button} onClick={keep}>Keep Fish</button>
                </div>
            </div>
        </div>
    )

}