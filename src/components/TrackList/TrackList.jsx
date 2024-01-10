import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./TrackList.styles";
import { getPlayList } from "../../api";
import { useSelector } from "react-redux";
import { playerSelector } from "../../store/selectors/selectors";
import { useDispatch } from "react-redux";
import {
  nextTrack,
  setCurrentTrack,
} from "../../store/actions/creators/creators";
export function MainCenterblok({
  isLoading,
  setLoading,
  isPlaying,
  setIsPlaying,
}) {
  const [allTracks, setAllTracks] = useState([]);
  const [error, setError] = useState(null);
  const [trackId, setTrackId] = useState();
  const dispatch = useDispatch();
  const currentTrack = useSelector(
    (state) => state.player.currentTrack.content
  );
  const isCurrentTrackPlaying = useSelector(
    (state) => state.player.isPlayingTrack
  );
  useEffect(() => {
    setLoading(true);
    getPlayList()
      .then((lists) => {
        setAllTracks(lists);
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      )
      .catch((error) => setError(error.message));
  }, []);
  if (error) {
    return <div>Ошибка при получении треков: {error}</div>;
  }
  const handleCurrentTrackId = (oneTrack) => {
    const isPlayingTrack = true;
    dispatch(setCurrentTrack(oneTrack.id, oneTrack, isPlayingTrack, allTracks));
  };

  const setPlayItemImage = (oneTrack) => {
    if (isLoading) {
      return <Skeleton />;
    }

    if (isCurrentTrackPlaying === true && currentTrack?.id === oneTrack?.id) {
      return <S.BlinkingDot alt="music"> </S.BlinkingDot>;
    }

    if (isCurrentTrackPlaying === false && currentTrack?.id === oneTrack?.id) {
    } else {
      return (
        <S.TrackTitleSvg className="track__title-svg" alt="music">
          {" "}
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>{" "}
        </S.TrackTitleSvg>
      );
    }
  };
  return (
    <>
      {allTracks.map((oneTrack) => {
        return (
          <S.PlayListItem key={oneTrack.id}>
            <S.PlayListTrack>
              <S.TrackTitle>
                {/* <SkeletonTheme baseColor="#cf6565" highlightColor="#ff0">
                      <p><Skeleton /></p>
                    </SkeletonTheme> */}
                <S.TrackTitleImg>{setPlayItemImage(oneTrack)}</S.TrackTitleImg>
                <S.TrackTitleText>
                  <SkeletonTheme
                    baseColor="#313131"
                    highlightColor="#fff"
                    height={20}
                    width={356}
                  >
                    {!isLoading ? (
                      <S.TrackTitleLink
                        onClick={() => {
                          handleCurrentTrackId(oneTrack);
                          setIsPlaying(true);
                        }}
                      >
                        {oneTrack.name} <S.TrackTitleSpan></S.TrackTitleSpan>
                      </S.TrackTitleLink>
                    ) : (
                      <Skeleton />
                    )}
                  </SkeletonTheme>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <SkeletonTheme
                  baseColor="#313131"
                  highlightColor="#fff"
                  height={20}
                  width={272}
                >
                  {!isLoading ? (
                    <S.TrackAuthorLink href="http://">
                      {oneTrack.author}
                    </S.TrackAuthorLink>
                  ) : (
                    <Skeleton />
                  )}
                </SkeletonTheme>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <SkeletonTheme
                  baseColor="#313131"
                  highlightColor="#fff"
                  height={20}
                  width={250}
                >
                  {!isLoading ? (
                    <S.TrackAlbumLink href="http://">
                      {oneTrack.album}
                    </S.TrackAlbumLink>
                  ) : (
                    <Skeleton />
                  )}
                </SkeletonTheme>
              </S.TrackAlbum>
              <S.TrackTime>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>
                  {" "}
                  {!isLoading
                    ? (oneTrack.duration_in_seconds / 60).toFixed(2)
                    : "0.00"}
                </S.TrackTimeText>
              </S.TrackTime>
            </S.PlayListTrack>
          </S.PlayListItem>
        );
      })}
    </>
  );
}
