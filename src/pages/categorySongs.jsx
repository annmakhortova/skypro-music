import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Context from "../context";
import { useContext } from "react";
import { getCatalog_1, getCatalog_2, getCatalog_3 } from "../api/api";
import {
  catalogClassic,
  catalogElectro,
  catalogRock,
} from "../store/slices/trackSlice";
import * as S from "./styles/Main.styles";
import Track from "../components/Track/Track";

export const CategorySongs = () => {
  const { setPlaylist } = useContext(Context);
  const dispatch = useDispatch();
  const authData = JSON.parse(localStorage.getItem("authData"));
  const token = authData.access.access;
  const classic = useSelector((state) => state.playlist.catalog_1);
  const electro = useSelector((state) => state.playlist.catalog_2);
  const rock = useSelector((state) => state.playlist.catalog_3);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const tracks = await getCatalog_1(token);
      console.log(tracks.items);
      dispatch(catalogClassic(tracks.items));
      if (params.id === "1") {
        setPlaylist(tracks.items);
      }
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    (async () => {
      const tracks = await getCatalog_2(token);
      console.log(tracks);
      dispatch(catalogElectro(tracks.items));
      if (params.id === "2") {
        setPlaylist(tracks.items);
      }
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    (async () => {
      const tracks = await getCatalog_3(token);
      console.log(tracks);
      dispatch(catalogRock(tracks.items));
      if (params.id === "3") {
        setPlaylist(tracks.items);
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {params.id === "1" ? (
        <S.centoblockTittle>Классическая музыка</S.centoblockTittle>
      ) : null}
      {params.id === "2" ? (
        <S.centoblockTittle>Электронная музыка</S.centoblockTittle>
      ) : null}
      {params.id === "3" ? (
        <S.centoblockTittle>Рок музыка</S.centoblockTittle>
      ) : null}
      {params.id === "1"
        ? classic.map((item) => {
            return <Track item={item} key={item.id} />;
          })
        : null}
      {params.id === "2"
        ? electro.map((item) => {
            return <Track item={item} key={item.id} />;
          })
        : null}
      {params.id === "3"
        ? rock.map((item) => {
            return <Track item={item} key={item.id} />;
          })
        : null}
    </>
  );
};
