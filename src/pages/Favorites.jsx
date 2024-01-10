import * as S from "./styles/Main.styles";
import React, { useEffect } from "react";
import GlobalStyle from "./styles/Main.styles";
import { useSelector, useDispatch } from "react-redux";
import { getFavoriteTracks } from "../api/api";
import { favoritesRedux } from "../store/slices/trackSlice";
import Track from "../components/Track/Track";
import Context from "../context";
import { useContext } from "react";

export const Favorites = () => {
  const { setPlaylist } = useContext(Context);
  const dispatch = useDispatch();
  const authData = JSON.parse(localStorage.getItem("authData"));
  const token = authData.access.access;
  const favoriteTracks = useSelector((state) => state.playlist.favorites);

  useEffect(() => {
    (async () => {
      const tracks = await getFavoriteTracks(token);
      console.log(tracks);
      dispatch(favoritesRedux(tracks));
      setPlaylist(tracks);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <GlobalStyle />
      <S.centoblockTittle>Мои Треки</S.centoblockTittle>
      {favoriteTracks.length > 0 ? (
        favoriteTracks.map((item) => {
          return <Track item={item} key={item.id} />;
        })
      ) : (
        <p>В данном плейлисте треков нет</p>
      )}
    </>
  );
};
