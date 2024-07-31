import styles from '../styles/tackle-box.module.css'
import { useState,useEffect } from 'react'
import { useAppContext } from '@/context/state.js'

export const TackleBox = () => {

    const [selectedBait,setSelectedBait] = useState(false)

    const { tackleBox, setShowTackleBox, currentBait, setCurrentBait } = useAppContext()

    const filterFish = (e) => {
        
        if(parseInt(e.target.value) === 0){
            setDisplayedFish(playerInventory)
        }
        else {
            const filteredFish = playerInventory.filter((fish) => fish.fish.fish_type.id === parseInt(e.target.value))
            setDisplayedFish(filteredFish)
        }
    }

    const selectBait = (e) => {
        const foundBait = tackleBox.find((bait) => bait.bait.id === parseInt(e.currentTarget.id))
        setSelectedBait(foundBait)
    }

    const toggleShowTackleBox = () => {
        setShowTackleBox(false)
    }

    const rigBait = () => {
        setCurrentBait(selectedBait)
        setShowTackleBox(false)
    }

    return (
        <div className='modalWindow'>

            <div className={styles.topBar}> 
                <div className={styles.title}>tackle box</div>
                <div className={styles.exit} onClick={toggleShowTackleBox}>✖</div>
            </div>

            <div className={styles.displayArea}>
                {tackleBox?.map((bait) => 
                    <div className={styles.box} key={bait.bait.id} id={bait.bait.id} onClick={selectBait}>
                        <div className={styles.name}>
                            <div>{bait.bait.name}</div>
                            <div>{bait.quantity}</div>
                        </div>
                        <div 
                            className={styles.image}
                            style={{ backgroundImage: `url('http://localhost:8000/${bait.bait.image}')` }}
                        ></div>
                    </div>
                )}
            </div>

            {selectedBait? <div className={styles.stats}>
                {selectedBait? <div className={styles.column}>
                    <div className={styles.name}>{selectedBait.bait?.name}</div>
                    <div className={styles.info}>Price: ${selectedBait.bait?.price}</div>
                </div>: <></>}
                {selectedBait? <div className={styles.column}>
                    <button className={styles.button} onClick={rigBait}>Rig Bait</button>
                </div>: <></>}
            </div> : <></>}
        </div>
    )

}