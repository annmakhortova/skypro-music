import React from 'react'
import { SkeletonTrackPlayer } from '../skeleton/skeleton-trackplayer'
import *as S from './track-player.styles'


const TrackPlayerLoaded = ({ track }) => {
  
  return (
    <S.TrackPlayContain>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </S.TrackPlaySvg>
      </S.TrackPlayImage>
      <S.TrackPlayAuthor>
        <S.TrackPlayAuthorLink href="http://">
          {track.name}
        </S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum>
        <S.TrackPlayAlbumLink href="http://">
          {track.author}
        </S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  )
}

export function TrackPlayer({ isLoading, track}) {
  
  return (
    <S.PlayerTrackPlay className="track-play">
      {isLoading ? <SkeletonTrackPlayer /> : <TrackPlayerLoaded track={track}/>}
      <S.TrackPlayLikeDis>
        <S.TrackPlayLikeBtn className="_btn-icon">
          <S.TrackPlayLikeSvg className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLikeBtn>
        <S.TrackPlayDislikeBtn className="_btn-icon">
          <S.TrackPlayDislikeSvg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislikeBtn>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}