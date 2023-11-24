import { Container, Wrapper } from '../../app.styles'
import { CreateNavigation } from '../../components/NavMenu/navigation'
import { Sidebar } from '../../components/sidebar/sidebar'
import { Bar } from '../../components/bar/bar'
import { Footer } from '../../components/footer'
import { useState, useEffect } from 'react'
import { getAllTracks } from '../../api/trackApi'

import * as S from '../../components/main/main.styles'
import { useContext } from 'react'
import { userContext } from '../../context/userContext'
import { useDispatch, useSelector } from 'react-redux'
import { setAllTracks, setIsLoading } from '../../store/slices/trackSlice'
import {
  selectIsLoading,
  currentTrackSelector,
} from '../../store/selectors/selectors'
import { Outlet } from 'react-router-dom'

export const MainPage = () => {
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch()
 
  const track = useSelector(currentTrackSelector)
  const { token, setToken } = useContext(userContext)

  return (
    <Wrapper>
      <Container>
        <S.MainMain>
          <CreateNavigation setToken={setToken} />
          <S.MainCenterblock className="cterblock">
            <S.CenterblockSearch className="search">
              <S.SearchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </S.SearchSvg>
              <S.SearchText type="search" placeholder="Поиск" name="search" />
            </S.CenterblockSearch>

            <Outlet />
          </S.MainCenterblock>
          <Sidebar isLoading={isLoading} />
        </S.MainMain>
        {track ? <Bar isLoading={isLoading} /> : null}
        <Footer />
      </Container>
    </Wrapper>
  )
}
