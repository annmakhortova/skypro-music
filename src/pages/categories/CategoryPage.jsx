import { ContentTitlePlaylist } from '../../components/content-title-playlist/content-title-playlist'
import { Playlist } from '../../components/playlist/playlist'
import * as S from '../main/layout.styles'

import { useParams } from 'react-router-dom'
import { PLAYLISTS } from '../../sidebar-constants'
import { useContext, useEffect } from 'react'
import { userContext } from '../../context/userContext'
import { useDispatch } from 'react-redux'
import { selectCurrentTrack, selectIsPlaying } from '../../store/actions/creators/currentTrack'

export const CategoryPage = ({ isLoading, error }) => {
  const params = useParams()
  const {token, setToken} = useContext(userContext)
  const dispatch = useDispatch()

  const playlist = PLAYLISTS.find(
    (playlist) => playlist.id === Number(params.id),
  )
  if (localStorage.getItem('token', token)) {
    return (
      <div>
        <S.CenterblockH2>Category Page: {playlist.id}</S.CenterblockH2>
        <S.CenterblockContent>
          <ContentTitlePlaylist isLoading={isLoading} />
          <Playlist isLoading={isLoading} error={error} />
        </S.CenterblockContent>
      </div>
    )
  } else {
    useEffect(() => {
      setToken(false)
      dispatch(selectCurrentTrack({}))
      dispatch(selectIsPlaying(false))
    }, [])
  }
}
