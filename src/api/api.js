const baseURL = " https://skypro-music-api.skyeng.tech";

export async function getAllTracks() {
  const response = await fetch(`${baseURL}/catalog/track/all/`);
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function loginApi({ email, password }) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/login/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  const user = await response.json();
  return user;
}

export async function signUp({ email, password }) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        username: email,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  const user = await response.json();
  return user;
}

export async function getToken({ email, password }) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  if (response.status === 401) {
    throw new Error("Данные неверны");
  }
  const data = await response.json();
  return data;
}

export async function addFavoriteTrack(trackId, accessToken) {
  console.log(trackId);
  const url =
    "https://skypro-music-api.skyeng.tech/catalog/track/" +
    trackId +
    "/favorite/";
  console.log(url);
  const response = await fetch(url, {
    method: "POST",
    body: {},
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  if (response.status === 401) {
    localStorage.removeItem("authData");
    window.location.href = "/login";
    //throw new Error("Токен не действителен");
  }

  const data = await response.json();
  return data;
}

export async function getFavoriteTracks(token) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const tracks = await response.json();
  return tracks;
}

export async function getCatalog_1() {
  const response = await fetch(`${baseURL}/catalog/selection/1/`);
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getCatalog_2() {
  const response = await fetch(`${baseURL}/catalog/selection/2/`);
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getCatalog_3() {
  const response = await fetch(`${baseURL}/catalog/selection/3/`);
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function removeFavoriteTracks(trackId, accessToken) {
  console.log(trackId);
  const url =
    "https://skypro-music-api.skyeng.tech/catalog/track/" +
    trackId +
    "/favorite/";
  console.log(url);
  const response = await fetch(url, {
    method: "DELETE",
    body: {},
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  if (response.status === 401) {
    localStorage.removeItem("authData");
    window.location.href = "/login";
  }

  const data = await response.json();
  return data;
}
