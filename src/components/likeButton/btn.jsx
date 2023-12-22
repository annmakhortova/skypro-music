import React, { useState, useContext, useEffect } from 'react'
import { userContext } from '../../context/userContext'
import {
  useAddFavouriteTracksMutation,
  useDeleteFavouriteTracksMutation,
} from '../../services/playlists'
import { useNavigate } from 'react-router-dom'
import { TrackTimeSvg } from '../playlist/playlist.styles'

export const Btn = ({ track }) => {
  const [isLiked, setIsLiked] = useState(false)
  const navigate = useNavigate()

  const { token, setToken } = useContext(userContext)
  const [addFavouriteTrack] = useAddFavouriteTracksMutation()
  const [deleteFavouriteTrack] = useDeleteFavouriteTracksMutation()
  
  const userId = JSON.parse(localStorage.getItem('token')).id

  useEffect(() => {
    const isLike = Boolean(
      track && track.stared_user ? track.stared_user.find(({ id }) => id === userId) : [],
    )
    setIsLiked(isLike)
  }, [track])

  const addLike = async (id, e) => {
    e.stopPropagation()
    await addFavouriteTrack(id)
      .unwrap()
      .catch((error) => {
        localStorage.removeItem('token')
        setToken(false)
        navigate('/login')
      })
    setIsLiked(true)
  }

  const deleteLike = async (id, e) => {
    e.stopPropagation()
    await deleteFavouriteTrack(id)
      .unwrap()
      .catch((error) => {
        localStorage.removeItem('token')
        setToken(false)
        navigate('/login')
      })
    setIsLiked(false)
  }

  const toggleLikeDislike = (id, e) => {
    if (!isLiked) {
      addLike(id, e)
    } else {
      deleteLike(id, e)
    }
  }

  return (
    <TrackTimeSvg alt="time" onClick={(e) => toggleLikeDislike(track.id, e)}>
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
        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
      )}
    </TrackTimeSvg>
  )
}
