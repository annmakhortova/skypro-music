import tracklist from '../Tracklist/Tracklist.js'
import { FilterButtons } from '../FilterButtons/FilterButtons.js'
import * as S from './CenterblockStyles.js'

const Centerblock = () => {
    return (
        <S.MainCenterblock>
            <S.CenterblockSearch>
                <S.SearchSvg>
                    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                </S.SearchSvg>
                <S.SearchText type="search" placeholder="Поиск" name="search" />
            </S.CenterblockSearch>
            <S.CenterblockHeading>Треки</S.CenterblockHeading>
            {FilterButtons()}
            <S.CenterblockContent>
                <S.ContentTitle>
                    <S.PlaylistTitleTrack>Трек</S.PlaylistTitleTrack>
                    <S.PlaylistTitleAuthor>ИСПОЛНИТЕЛЬ</S.PlaylistTitleAuthor>
                    <S.PlaylistTitleAlbum>АЛЬБОМ</S.PlaylistTitleAlbum>
                    <S.PlaylistTitleImage>
                        <S.PlaylistTitleSvg alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                        </S.PlaylistTitleSvg>
                    </S.PlaylistTitleImage>
                </S.ContentTitle>
                {tracklist()}
            </S.CenterblockContent>
        </S.MainCenterblock>
    )
}

export default Centerblock
