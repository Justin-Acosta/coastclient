import { fetchWithResponse } from "./fetcher"

export function getLocations() {
    return fetchWithResponse(`locations`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      }
    })
}

export function catchFish(object) {
    return fetchWithResponse(`locations/catch_fish`, {
        method: "POST",
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}

export function keepFish(object) {
    return fetchWithResponse(`locations/keep_fish`, {
        method: "POST",
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}