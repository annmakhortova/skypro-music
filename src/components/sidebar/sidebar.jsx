import React, { useContext } from 'react'
import { SkeletonSidebarList } from '../skeleton/skeleton-sidebar'
import * as S from './sidebar.styles'
import { PLAYLISTS } from '../../sidebar-constants'
import { Link } from 'react-router-dom'
import { userContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack, setIsPlaying } from '../../store/slices/trackSlice'
import { useGetAllTracksQuery } from '../../services/playlists'
import { selectIsLoading } from '../../store/selectors/selectors'

const CategoryItems = ({ playlists }) => {
  return (
    <S.SidebarList>
      {playlists.map((playlist) => (
        <S.SidebarItem key={playlist.id}>
          <Link to={`/category/${playlist.id}`}>
            <S.SidebarLink href={playlist.href}>
              <S.SidebarImage src={playlist.src} alt={playlist.alt} />
            </S.SidebarLink>
          </Link>
        </S.SidebarItem>
      ))}
    </S.SidebarList>
  )
}

const SidebarListLoaded = () => {
  return <CategoryItems playlists={PLAYLISTS}></CategoryItems>
}

export function Sidebar() {
  const { setToken } = useContext(userContext)

  const isLoading = useSelector(selectIsLoading)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isFetching } = useGetAllTracksQuery()
  
  const handleLogoutBtn = () => {
    localStorage.clear()
    setToken(false)
    dispatch(setCurrentTrack({}))
    dispatch(setIsPlaying(false))
    navigate('/login')
  }

  const userData = JSON.parse(localStorage.getItem('token'))
  const userName = userData.username

  return (
    <S.MainSidebar>
      <S.SideBarPersonal>
        <S.SidebarPersonalName>
          {isLoading ? '' : userName}
        </S.SidebarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout" onClick={handleLogoutBtn}>
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SidebarBlock>
        {isLoading && isFetching ? <SkeletonSidebarList /> : <SidebarListLoaded />}
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
