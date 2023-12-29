import React, { useState } from 'react'
import * as S from './playlist.styles'
import { useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  selectIsPlaying,
  currentPlaylistSelector,
  currentTrackSelector,
} from '../../store/selectors/selectors'
import { setActivePlaylist, setCurrentPlaylist, setCurrentTrack, setIsLoading } from '../../store/slices/trackSlice'
import {
  useAddFavouriteTracksMutation,
  useDeleteFavouriteTracksMutation,
  useGetAllTracksQuery,
  useGetFavouriteTracksQuery,
} from '../../services/playlists'
import { userContext } from '../../context/userContext'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Btn } from '../likeButton/btn'

export const PlaylistItem = ({
  track,
  album,
  author,
  link,
  title,
  albumLink,
  authorLink,
  titleSpan,
  time,
}) => {
  const dispatch = useDispatch()

  const isPlaying = useSelector(selectIsPlaying)
  const currentTrack = useSelector(currentTrackSelector)

  const tracklist = useSelector(currentPlaylistSelector)

  const showPlayer = (track) => {
    dispatch(setCurrentTrack(track))
    dispatch(setActivePlaylist(tracklist))
  }

  return (
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTrack onClick={() => showPlayer(track)}>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentTrack.id === track.id && (
              <S.TrackTitleAnimation
                $isPlaying={isPlaying}
              ></S.TrackTitleAnimation>
            )}
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div className="track__title-text">
            <S.TrackTitleLink href={link}>
              {title}
              <S.TrackTitleSpan>{titleSpan}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href={authorLink}>{author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href={albumLink}>{album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <div className="track__time">
          <Btn track={track}></Btn>
          <S.TrackTimeText className="track__time-text">{time}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
