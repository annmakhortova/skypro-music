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

  const tracklist = useSelector(currentPlaylistSelector) //

  const showPlayer = (track) => {
    dispatch(setCurrentTrack(track))
    dispatch(setActivePlaylist(tracklist))
  }

  const [isLiked, setIsLiked] = useState(false)

  const [addFavouriteTrack] = useAddFavouriteTracksMutation()
  const [deleteFavouriteTrack] = useDeleteFavouriteTracksMutation() 

  const navigate = useNavigate()
  const { token, setToken } = useContext(userContext)

  const addLike = async (id) => {
    await addFavouriteTrack(id).unwrap().catch((error) => {
      localStorage.removeItem('token')
      setToken(false)
      navigate('/login')
    })
    setIsLiked(true)
  }

  const deleteLike = async (id) => {
    deleteFavouriteTrack(id).unwrap().catch((error) => {
      localStorage.removeItem('token')
      setToken(false)
      navigate('/login')
    })
    setIsLiked(false)
  }

  const toggleLikeDislike = (id) => {
    if (!isLiked) {
      addLike(id)
    } else {
      deleteLike(id)
    }
  }

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('token'))
    if (!track.stared_user) {
      setIsLiked(true)
      return
    }

    if (track?.stared_user?.find((user) => user.id === currentUser.id)) {
      setIsLiked(true)
    }
  }, [track])

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
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
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
          <S.TrackTimeSvg
            alt="time"
            onClick={() => toggleLikeDislike(track.id)}
          >
            {isLiked ? (
              <svg
                width="16"
                height="14"
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
            ) : (
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            )}
          </S.TrackTimeSvg>
          <S.TrackTimeText className="track__time-text">{time}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
