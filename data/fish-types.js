import { fetchWithResponse } from "./fetcher"

export function getFishTypes() {
    return fetchWithResponse(`fish_types`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      }
    })
}