import React from "react";
import * as S from "./Bar.styles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRef, useState, useEffect } from "react";
import {
  favoritesRedux,
  setCurrentTrackRedux,
  setIsPlaying,
} from "../../store/slices/trackSlice";
import Context from "../../context";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteTrack,
  getFavoriteTracks,
  removeFavoriteTracks,
} from "../../api/api";

function Bar({ loading, currentTrack }) {
  const { isPlaylist } = useContext(Context);
  const [isPlaying, setPlaying] = useState(false);
  const dispatch = useDispatch();
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const ref = useRef(null);

  const authData = JSON.parse(localStorage.getItem("authData"));
  const token = authData.access.access;
  const handleStart = () => {
    ref.current.play();
    dispatch(setIsPlaying(true));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  //useEffect(handleStart, [currentTrack]) //запуск при клике

  const handleStop = () => {
    ref.current.pause();
    dispatch(setIsPlaying(false));
  };

  const handleRepeat = () => {
    ref.current.loop = !isRepeat;
    setIsRepeat(!isRepeat);
  };

  const handleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const [currentTime, setCurrentTime] = useState(0); //текущее время
  const [duration, setDuration] = useState(0); //длительность трека

  function Time(sec) {
    if (sec % 60 >= 10) {
      return `${Math.floor(sec / 60)}:${Math.floor(sec % 60)}`;
    } else {
      return `${Math.floor(sec / 60)}:0${Math.floor(sec % 60)}`;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(ref.current.currentTime);
      setDuration(ref.current.duration);
    }, 1000);
    return () => clearTimeout(interval);
  }, [currentTrack]); //время

  function whatIsTrack() {
    for (let i = 0; i <= isPlaylist.length - 1; i++) {
      if (isPlaylist[i].id === currentTrack.id) {
        return i;
      }
    }
  }

  const nextTrack = () => {
    let index = whatIsTrack();
    if (isShuffle === true) {
      dispatch(
        setCurrentTrackRedux(
          isPlaylist[Math.floor(Math.random() * isPlaylist.length)]
        )
      );
    } else if (index !== isPlaylist.length - 1) {
      dispatch(setCurrentTrackRedux(isPlaylist[index + 1]));
    } else {
      dispatch(setIsPlaying(false));
    }
  };

  const previousTrack = () => {
    let index = whatIsTrack();
    if (currentTime > 4) {
      ref.current.currentTime = 0;
    } else if (isShuffle === true) {
      dispatch(
        setCurrentTrackRedux(
          isPlaylist[Math.floor(Math.random() * isPlaylist.length)]
        )
      );
    } else if (index !== 0 && currentTime <= 4) {
      dispatch(setCurrentTrackRedux(isPlaylist[index - 1]));
    }
  };

  useEffect(() => {
    if (currentTime === duration && currentTime !== 0) {
      nextTrack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  const favoriteTracks = useSelector((state) => state.playlist.favorites);

  let isFound = false;
  try {
    isFound = favoriteTracks.some((element) => {
      if (element.id === currentTrack.id) {
        return true;
      }

      return false;
    });
  } catch {
    window.location.href = "/login";
  }

  useEffect(() => {
    setIsLiked(isFound);
    // eslint-disable-next-line
  }, [currentTrack]);

  const [isLiked, setIsLiked] = useState(isFound);

  async function handleFavorite({ trackId, token }) {
    await addFavoriteTrack(trackId, token).then(() => {
      getFavoriteTracks(token).then((tracks) => {
        console.log(tracks);
        dispatch(favoritesRedux(tracks));
      });
    });
  }

  async function handleUnlike({ trackId, token }) {
    await removeFavoriteTracks(trackId, token).then(() => {
      getFavoriteTracks(token).then((tracks) => {
        console.log(tracks);
        dispatch(favoritesRedux(tracks));
      });
    });
  }

  return (
    <>
      <audio
        ref={ref}
        src={currentTrack.track_file}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onCanPlayThrough={handleStart}
      ></audio>
      <S.Bar>
        <S.BarContent>
          <S.TimeCode>
            {Time(currentTime)} / {Time(duration)}
          </S.TimeCode>
          <S.StyledProgressInput
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(a) => {
              ref.current.currentTime = a.target.value;
            }}
          />
          <S.BarPlayerProgress></S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.BarPlayerControls>
                <S.BarPlayerBtnPrev
                  onClick={() => {
                    previousTrack();
                  }}
                >
                  <S.BarBtnPrevSvg alt="prev">
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                  </S.BarBtnPrevSvg>
                </S.BarPlayerBtnPrev>
                {isPlaying ? (
                  <S.BarPlayerBtnPlay
                    onClick={() => {
                      handleStop();
                      dispatch(setIsPlaying(false));
                    }}
                  >
                    <S.BarPlayerBtnPlaySvg alt="play">
                      <svg
                        width="15"
                        height="19"
                        viewBox="0 0 15 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="5" height="19" fill="#D9D9D9" />
                        <rect x="10" width="5" height="19" fill="#D9D9D9" />
                      </svg>
                    </S.BarPlayerBtnPlaySvg>
                  </S.BarPlayerBtnPlay>
                ) : (
                  <S.BarPlayerBtnPlay
                    onClick={() => {
                      handleStart();
                      dispatch(setIsPlaying(true));
                    }}
                  >
                    <S.BarPlayerBtnPlaySvg alt="play">
                      <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                    </S.BarPlayerBtnPlaySvg>
                  </S.BarPlayerBtnPlay>
                )}
                <S.BarPlayerBtnNext
                  onClick={() => {
                    nextTrack();
                  }}
                >
                  <S.BarPlayerBtnNextSvg alt="next">
                    <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                  </S.BarPlayerBtnNextSvg>
                </S.BarPlayerBtnNext>
                {isRepeat ? (
                  <S.PlayerBtnRepeat onClick={handleRepeat}>
                    <S.PlayerBtnRepeatActiveSvg alt="repeat">
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatActiveSvg>
                  </S.PlayerBtnRepeat>
                ) : (
                  <S.PlayerBtnRepeat onClick={handleRepeat}>
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                )}
                {isShuffle ? (
                  <S.BarPlayerBtnIconHover onClick={handleShuffle}>
                    <S.BarPlayerBtnShuffleActiveSvg alt="shuffle">
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </S.BarPlayerBtnShuffleActiveSvg>
                  </S.BarPlayerBtnIconHover>
                ) : (
                  <S.BarPlayerBtnIconHover onClick={handleShuffle}>
                    <S.BarPlayerBtnShuffleSvg alt="shuffle">
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </S.BarPlayerBtnShuffleSvg>
                  </S.BarPlayerBtnIconHover>
                )}
              </S.BarPlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayerContain>
                  <S.TrackPlayImg>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImg>
                  <S.TrackPlayerAuthor>
                    <SkeletonTheme
                      baseColor="#313131"
                      highlightColor="#fff"
                      height={20}
                      width={120}
                    >
                      {loading ? (
                        <Skeleton />
                      ) : (
                        <S.TrackPlayerAuthorLink href="http://">
                          {currentTrack.name}
                        </S.TrackPlayerAuthorLink>
                      )}
                    </SkeletonTheme>
                  </S.TrackPlayerAuthor>
                  <S.TrackPlayAlbum>
                    <SkeletonTheme
                      baseColor="#313131"
                      highlightColor="#fff"
                      height={20}
                      width={120}
                    >
                      {loading ? (
                        <Skeleton />
                      ) : (
                        <S.TrackPlayAlbumLink href="http://">
                          {currentTrack.author}
                        </S.TrackPlayAlbumLink>
                      )}
                    </SkeletonTheme>
                  </S.TrackPlayAlbum>
                </S.TrackPlayerContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    {isLiked ? (
                      <S.TrackTimeSvg
                        alt="time"
                        onClick={() => {
                          setIsLiked(false);
                          handleUnlike({ trackId: currentTrack.id, token });
                        }}
                      >
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </S.TrackTimeSvg>
                    ) : (
                      <S.TrackTimeSvg
                        alt="time"
                        onClick={() => {
                          setIsLiked(true);
                          handleFavorite({ trackId: currentTrack.id, token });
                        }}
                      >
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </S.TrackTimeSvg>
                    )}
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <S.TrackPlayDisLikeSvg alt="dislike">
                      <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDisLikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="/img/icon/volume#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={(a) => {
                      ref.current.volume = a.target.value;
                    }}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}
export default Bar;
