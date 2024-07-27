import { fetchWithResponse } from "./fetcher"

export function getShopInventory() {
    return fetchWithResponse(`shop_inventory`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      }
    })
}

export function purchaseBait(object) {
    return fetchWithResponse(`shop/purchase_bait`, {
        method: "POST",
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}

export function sellFish(object) {
    return fetchWithResponse(`shop/sell_fish`, {
        method: "POST",
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}