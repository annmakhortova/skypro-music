import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./Track.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  favoritesRedux,
  setCurrentTrackRedux,
} from "../../store/slices/trackSlice";
import { useEffect, useState } from "react";
import React from "react";
import {
  addFavoriteTrack,
  getFavoriteTracks,
  removeFavoriteTracks,
} from "../../api/api";

export default function Track({ item }) {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.playlist.currentTrack);
  const isPlaying = useSelector((state) => state.playlist.isPlaying);
  const authData = JSON.parse(localStorage.getItem("authData"));
  const token = authData.access.access;

  console.log(authData);

  // const token = useSelector((state) => state.auth.access.access);
  const favoriteTracks = useSelector((state) => state.playlist.favorites);

  let isFound = false;
  try {
    isFound = favoriteTracks.some((element) => {
      if (element.id === item.id) {
        return true;
      }

      return false;
    });
  } catch {
    window.location.href = "/login";
  }
  useEffect(() => {
    // eslint-disable-next-line
    setIsLiked(isFound);
    // eslint-disable-next-line
  }, [favoriteTracks]);

  const [isLiked, setIsLiked] = useState(isFound);
  function time(sec) {
    if (sec % 60 >= 10) {
      return `${Math.floor(sec / 60)}.${sec % 60}`;
    } else {
      return `${Math.floor(sec / 60)}.0${sec % 60}`;
    }
  }
  async function handleFavorite({ trackId, token }) {
    console.log(token);
    await addFavoriteTrack(trackId, token).then(() => {
      getFavoriteTracks(token).then((tracks) => {
        dispatch(favoritesRedux(tracks));
      });
    });
  }

  async function handleUnlike({ trackId, token }) {
    await removeFavoriteTracks(trackId, token).then(() => {
      getFavoriteTracks(token).then((tracks) => {
        dispatch(favoritesRedux(tracks));
      });
    });
  }
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentTrack && currentTrack.id === item.id ? (
              <S.PointPlaying $playing={isPlaying} />
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink
              onClick={() => {
                dispatch(setCurrentTrackRedux(item));
              }}
            >
              {item.name} <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">{item.author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">{item.album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          {isLiked ? (
            <S.TrackTimeSvg
              alt="time"
              onClick={() => {
                setIsLiked(false);
                handleUnlike({ trackId: item.id, token });
              }}
            >
              <svg
                width="14"
                height="12"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z"
                  fill="#B672FF"
                />
                <path
                  d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052"
                  stroke="#B672FF"
                />
              </svg>
            </S.TrackTimeSvg>
          ) : (
            <S.TrackTimeSvg
              alt="time"
              onClick={() => {
                setIsLiked(true);
                handleFavorite({ trackId: item.id, token });
              }}
            >
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
          )}
          <S.TrackTimeText> {time(item.duration_in_seconds)}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
