import { ContentTitlePlaylist } from '../../components/content-title-playlist/content-title-playlist'
import { Playlist } from '../../components/playlist/playlist'
import * as S from '../main/layout.styles'

import { useParams } from 'react-router-dom'
import { PLAYLISTS } from '../../sidebar-constants'
import { useContext, useEffect } from 'react'
import { userContext } from '../../context/userContext'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsPlaying, currentTrackSelector, currentPlaylistSelector } from '../../store/selectors/selectors'
import {
  useGetSelectionByIdQuery,
  useGetSelectionsQuery,
} from '../../services/playlists'
import { setCurrentPlaylist, setIsLoading, setCurrentTrack } from '../../store/slices/trackSlice'

export const CategoryPage = ({ isLoading }) => {
  const params = useParams()
  const { token, setToken } = useContext(userContext)
  const dispatch = useDispatch()

  const { data: currentCategory, error } = useGetSelectionByIdQuery(Number(params.id))

  const currentTrack = useSelector(currentTrackSelector)

  const currentPlaylist = useSelector(currentPlaylistSelector)

  useEffect(() => {
    if (!currentPlaylist) return
    const track = currentPlaylist?.find((track) => track.id === currentTrack.id)
    track && dispatch(setCurrentTrack(track))
  }, [currentPlaylist])

  useEffect(() => {
    dispatch(setCurrentPlaylist(currentCategory?.items))
    dispatch(setIsLoading(false))
  }, [currentCategory])

  if (localStorage.getItem('token', token)) {
    return (
      <div>
        <S.CenterblockH2>{currentCategory?.name}</S.CenterblockH2>
        <S.CenterblockContent>
          <ContentTitlePlaylist isLoading={isLoading} />
          {error ? (
            <p>Не удалось заргузить плейлист: {error.error}</p>
          ) : (
            <Playlist tracks={currentCategory?.items} />
          )}
          {/* <Playlist tracks={currentCategory?.items} /> */}
        </S.CenterblockContent>
      </div>
    )
  } else {
    useEffect(() => {
      setToken(false)
      dispatch(currentTrackSelector({}))
      dispatch(selectIsPlaying(false))
    }, [])
  }
}
