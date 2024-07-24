import { fetchWithResponse } from "./fetcher"

export function getPlayer() {
    return fetchWithResponse(`player`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      }
    })
  }