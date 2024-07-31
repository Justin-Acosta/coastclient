import styles from '../styles/player-inventory.module.css'
import { useState, useEffect } from 'react'
import { useAppContext } from '@/context/state.js'

export const PlayerInventory = () => {

    const { playerInventory, fishTypes, setShowPlayerInventory } = useAppContext()

    const [displayedFish, setDisplayedFish] = useState([])
    const [selectedFish, setSelectedFish] = useState(false)

    useEffect(() => {
        setDisplayedFish(playerInventory)
    }, [playerInventory])

    const filterFish = (e) => {

        if (parseInt(e.target.value) === 0) {
            setDisplayedFish(playerInventory)
        }
        else {
            const filteredFish = playerInventory.filter((fish) => fish.fish.fish_type.id === parseInt(e.target.value))
            setDisplayedFish(filteredFish)
        }
    }

    const selectFish = (e) => {
        const foundFish = displayedFish.find((fish) => fish.fish.id === parseInt(e.currentTarget.id))
        setSelectedFish(foundFish)
    }

    const toggleShowInventory = () => {
        setShowPlayerInventory(false)
    }

    return (
        <div className='modalWindow'>

            <div></div>
            <div className={styles.topBar}>
                <select className={styles.select} onChange={filterFish}>
                    <option value='0'>all</option>
                    {fishTypes.map((type) =>
                        <option value={type.id} key={type.id}>{type.name}</option>
                    )}
                </select>
                <div className={styles.title}>inventory</div>
                <div className={styles.exit} onClick={toggleShowInventory}>✖</div>
            </div>

            <div className={styles.displayArea}>
                {displayedFish.map((fish) =>
                    <div className={styles.box} key={fish.fish.id} id={fish.fish.id} onClick={selectFish}>
                        <div className={styles.name}>
                            <div>{fish.fish.name}</div>
                            <div>{fish.quantity}</div>
                        </div>
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url('http://localhost:8000/${fish.fish.image}')` }}
                        ></div>
                    </div>
                )}
            </div>

            {selectedFish ? <div className={styles.stats}>
                {selectedFish ? <div className={styles.column}>
                    <div className={styles.name}>{selectedFish.fish?.name}</div>
                    <div className={styles.info}>Size: {selectedFish.fish?.size} in.</div>
                    <div className={styles.info}>Price: ${selectedFish.fish?.price}</div>
                    <div className={styles.info}>Type: {selectedFish.fish?.fish_type.name}</div>
                </div> : <></>}
                {selectedFish ? <div className={styles.column}>
                </div> : <></>}
            </div> : <></>}
        </div>
    )

}