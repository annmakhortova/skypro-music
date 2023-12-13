export async function getAllTracks() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/all/',
    )

    if (!response.ok) {
        if (response.status === 500) {
            throw new Error('Ошибка сервера')
        }
    }

    const data = await response.json()
    return data
}