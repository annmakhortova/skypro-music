export const baseUrl = 'https://skypro-music-api.skyeng.tech'

export async function getAllTracks() {
    const response = await fetch(baseUrl + '/catalog/track/all/')

    if (!response.ok) {
        throw new Error('server error')
    }

    const data = await response.json()
    return data
}