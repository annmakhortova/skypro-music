const APIHOST = "https://skypro-music-api.skyeng.tech/";

export async function getAllTrack() {
  const response = await fetch(`${APIHOST}catalog/track/all/`, {
    headers: { Authorization: ``, "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) {
   // Promise.reject(response);
    throw new Error(`Не удалось загрузить плейлист, попробуйте позже!`); // ${response.status}
  }

  return data;
}

export function getTokken() {
  // const responsed = fetch("./");
}
export function getFavoritesTrack() {
  const responsed = fetch(`${APIHOST}`);
  const datas = responsed.json;
  return datas;
}
