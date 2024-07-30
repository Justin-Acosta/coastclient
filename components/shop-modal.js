import styles from '../styles/shop-modal.module.css'
import { useState, useEffect } from 'react'
import { useAppContext } from '@/context/state.js'
import { purchaseBait, sellFish } from '@/data/shop.js'
import { getPlayer } from '@/data/player.js'

export const ShopModal = () => {

    const [selectedBait, setSelectedBait] = useState(false)
    const [selectedFish, setSelectedFish] = useState(false)
    const [showBuy, setShowBuy] = useState(true)
    const [showSell, setShowSell] = useState(false)

    const { shopInventory,tackleBox, setTackleBox, playerInventory, setPlayerInventory, setPlayer, player } = useAppContext()

    const selectBait = (e) => {
        const foundBait = shopInventory.find((bait) => bait.bait.id === parseInt(e.currentTarget.id))
        setSelectedBait(foundBait)
    }

    const baitQuantity = (shopBait) => {
        const foundBait = tackleBox.find((tackleBait) => tackleBait.bait?.id === shopBait.bait?.id)
        return foundBait?.quantity
    } 

    const selectFish = (e) => {
        const foundFish = playerInventory.find((fish) => fish.fish.id === parseInt(e.currentTarget.id))
        setSelectedFish(foundFish)
    }

    const showBuyMenu = () => {
        setShowBuy(true)
        setShowSell(false)
    }

    const showSellMenu = () => {
        setShowBuy(false)
        setShowSell(true)
    }

    const buy = () => {
    if (parseInt(player.wallet) >= parseInt(selectedBait.bait.price)){        
        const request = {
            bait: selectedBait.bait.id
        }
        purchaseBait(request).then(
            (res) => {
                setTackleBox(res)
                return getPlayer()}).then(
                    (res) => setPlayer(res)
                )}
    }

    const sell = () => {
        const request = {
            fish: selectedFish.fish.id
        }
        sellFish(request).then(
            (res) => {
                setPlayerInventory(res)
                return getPlayer()}).then(
                    (res) => setPlayer(res)
                )
    }

    return (
        <div className='modalWindow'>

            <div></div>
            <div className={styles.topBar}>
                <div className={styles.buy} onClick={showBuyMenu}>Buy</div>
                <div className={styles.sell} onClick={showSellMenu}>Sell</div>

            </div>

            {showBuy ? <div className={styles.displayArea}>
                {shopInventory.map((bait) =>
                    <div className={styles.box} key={bait.bait.id} id={bait.bait.id} onClick={selectBait}>
                        <div className={styles.name}>
                            <div>{bait.bait.name}</div>
                            <div>{baitQuantity(bait)}</div>
                        </div>
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url('http://localhost:8000/${bait.bait.image}')` }}
                        ></div>
                    </div>
                )}
            </div> : <></>}

            {showSell ? <div className={styles.displayArea}>
                {playerInventory.map((fish) =>
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
            </div> : <></>}

            {showBuy && selectedBait ? <div className={styles.stats}>
                {selectedBait ? <div className={styles.column}>
                    <div className={styles.name}>{selectedBait.bait?.name}</div>
                    <div className={styles.info}>Price: ${selectedBait.bait?.price}</div>
                </div> : <></>}
                {selectedBait ? <div className={styles.column}>
                    <button className={styles.button} onClick={buy}>Buy</button>
                </div> : <></>}
            </div> : <></>}

            {showSell && selectedFish ? <div className={styles.stats}>
                {selectedFish ? <div className={styles.column}>
                    <div className={styles.name}>{selectedFish.fish?.name}</div>
                    <div className={styles.info}>Size: {selectedFish.fish?.size} in.</div>
                    <div className={styles.info}>Price: ${selectedFish.fish?.price}</div>
                    <div className={styles.info}>Type: {selectedFish.fish?.fish_type.name}</div>
                </div> : <></>}
                {selectedFish ? <div className={styles.column}>
                    <button className={styles.button} onClick={sell}>Sell</button>
                </div> : <></>}
            </div> : <></>}
        </div>
    )

}