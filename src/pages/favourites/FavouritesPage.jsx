import { useContext, useEffect } from 'react'
import { ContentTitlePlaylist } from '../../components/content-title-playlist/content-title-playlist'
import { Playlist } from '../../components/playlist/playlist'
import * as S from '../main/layout.styles'
import { userContext } from '../../context/userContext'
import {
  setCurrentTrack,
  setIsPlaying,
  setCurrentPlaylist,
  setIsLoading,
} from '../../store/slices/trackSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useGetFavouriteTracksQuery } from '../../services/playlists'
import { useNavigate } from 'react-router-dom'
import {
  currentPlaylistSelector,
  favouritePlaylistSelector,
} from '../../store/selectors/selectors'

export const FavouritesPage = ({ isLoading }) => {
  const { token, setToken } = useContext(userContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const tracklist = useSelector(currentPlaylistSelector)
  // console.log(tracklist)

  const { data, error } = useGetFavouriteTracksQuery()

  useEffect(() => {
    if (error) {
      localStorage.removeItem('token')
      setToken(false)
      navigate('/login')
    }
  }, [error])

  useEffect(() => {
    dispatch(setCurrentPlaylist(data))
    dispatch(setIsLoading(false))
  }, [data])



  if (localStorage.getItem('token', token)) {
    return (
      <div>
        <S.CenterblockH2>Мои Треки</S.CenterblockH2>
        <S.CenterblockContent>
          <ContentTitlePlaylist isLoading={isLoading} />
          {error ? (
            <p>Не удалось заргузить плейлист: {error.error}</p>
          ) : (
            <Playlist tracks={data} />
          )}
        </S.CenterblockContent>
      </div>
    )
  } else {
    useEffect(() => {
      setToken(false)
      dispatch(setCurrentTrack({}))
      dispatch(setIsPlaying(false))
    }, [])
  }
}

