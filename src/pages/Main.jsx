import * as S from "./styles/Main.styles";
import React, { useEffect } from "react";

import TreckList from "../components/TreckList/TreckList";
import GlobalStyle from "./styles/Main.styles";
import { useContext } from "react";
import Context from "../context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAlltracks, tracksRedux } from "../store/slices/trackSlice";
import { setAccess, setRefresh, setUserData } from "../store/slices/authSlice";
import { Filter } from "../components/Filter/Filter";
export const Main = () => {
  const { loading, tracks, tracksError, setPlaylist } = useContext(Context);
  const songs = useSelector((state) => state.playlist.tracks);
  const favorites = useSelector((state) => state.playlist.favorites);
  const dispatch = useDispatch();
  const filteredSongs = useSelector(
    (state) => state.playlist.FiltersPlaylist.filterTracksArr
  );

  useEffect(() => {
    if (filteredSongs.length === 0) {
      dispatch(tracksRedux(tracks));
      setPlaylist(tracks);
    } else {
      dispatch(tracksRedux(filteredSongs));
      setPlaylist(filteredSongs);
    }
    // eslint-disable-next-line
  }, [filteredSongs]);

  useEffect(() => {
    dispatch(setAlltracks(tracks));
    // eslint-disable-next-line
  }, [songs]);

  useEffect(() => {
    if (tracks.length) {
      dispatch(tracksRedux(tracks));
      setPlaylist(songs);
    }
    // eslint-disable-next-line
  }, [dispatch, tracks, favorites]);

  useEffect(() => {
    if (localStorage.getItem("authData") !== null) {
      let authData = JSON.parse(localStorage.getItem("authData"));
      dispatch(setUserData(authData.user));
      dispatch(setRefresh(authData.refresh));
      dispatch(setAccess(authData.access));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <GlobalStyle />
      <S.centoblockTittle>Треки</S.centoblockTittle>
      <Filter />
      {tracksError ? (
        <p>Не удалось загрузить плейлист, попробуйте позже</p>
      ) : (
        <TreckList tracks={songs} loading={loading} />
      )}
    </>
  );
};
