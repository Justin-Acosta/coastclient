import { fetchWithResponse } from "./fetcher"

export function getPlayer() {
  return fetchWithResponse(`players`, {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    }
  })
}

export function updatePlayer(playerObject) {

  const playerRequestObject = {
    nickname: playerObject.nickname,
    location: playerObject.location,
    wallet: playerObject.wallet,
    bait: playerObject.bait
  }

  return fetchWithResponse(`players/${playerObject.id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(playerRequestObject)
  })
}

export function getTackleBox() {
  return fetchWithResponse(`tackle_box`, {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    }
  })
}

export function getPlayerInventory() {
  return fetchWithResponse(`player_inventory`, {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    }
  })
}