import React from 'react'
import { SkeletonTrackPlayer } from '../skeleton/skeleton-trackplayer'
import *as S from './track-player.styles'
import { Btn } from '../likeButton/btn'

const TrackPlayerLoaded = ({ track }) => {
  
  return (
    <S.TrackPlayContain>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
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
        <Btn track={track}></Btn>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}