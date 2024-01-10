import React from "react";
import * as S from "./TreckList.styles"
import { Loading } from "../loading";
import { useDispatch } from "react-redux";
import { setIsPlaying } from "../../store/slices/trackSlice";
import Track from "../Track/Track";


function TreckList({tracks, loading}) {
  const dispatch = useDispatch()
  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.PlaylistTitleCol>
          <S.Col01>Трек</S.Col01>
        </S.PlaylistTitleCol>
        <S.PlaylistTitleCol>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        </S.PlaylistTitleCol>
        <S.PlaylistTitleCol>
          <S.Col03>АЛЬБОМ</S.Col03>
        </S.PlaylistTitleCol>
        <S.PlaylistTitleCol>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.PlaylistTitleCol>
      </S.ContentTitle>
      <S.ContentPlaylistItems onClick={() => {dispatch(setIsPlaying(true))}}>
      {
        loading ? (
          <Loading />
        ) : (
        tracks.map((item) => {
          return <Track item={item} key={item.id}/>
          
        }))
      }
      </S.ContentPlaylistItems>
    </S.CenterblockContent>
  );
  
}
export default TreckList;