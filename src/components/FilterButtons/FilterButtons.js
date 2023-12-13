import { useState } from 'react'
import { AuthorList } from '../FilterLists/AuthorList.js'
import { YearList } from '../FilterLists/YearList.js'
import { GenreList } from '../FilterLists/GenreList.js'
import * as S from './FilterButtonsStyles.js'

export const FilterButtons = () => {
    const [isActiveAuthorButton, setIsActiveAuthorButton] = useState(false)
    const [isActiveYearButton, setIsActiveYearButton] = useState(false)
    const [isActiveGenreButton, setIsActiveGenreButton] = useState(false)

    const [activeAuthor, setActiveAuthor] = useState(false)
    const [activeYear, setActiveYear] = useState(false)
    const [activeGenre, setActiveGenre] = useState(false)

    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleYear, setVisibleYear] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)

    const clickOnAuthorFilter = () => {
        setIsActiveAuthorButton(!isActiveAuthorButton)
        setIsActiveYearButton(false)
        setIsActiveGenreButton(false)
        setActiveAuthor(!activeAuthor)
        setActiveYear(false)
        setActiveGenre(false)
        setVisibleAuthor(!visibleAuthor)
        setVisibleYear(false)
        setVisibleGenre(false)
    }
    const clickOnYearFilter = () => {
        setIsActiveAuthorButton(false)
        setIsActiveYearButton(!isActiveYearButton)
        setIsActiveGenreButton(false)
        setActiveAuthor(false)
        setActiveYear(!activeYear)
        setActiveGenre(false)
        setVisibleYear(!visibleYear)
        setVisibleAuthor(false)
        setVisibleGenre(false)
    }
    const clickOnGenreFilter = () => {
        setIsActiveAuthorButton(false)
        setIsActiveYearButton(false)
        setIsActiveGenreButton(!isActiveGenreButton)
        setActiveAuthor(false)
        setActiveYear(false)
        setActiveGenre(!activeGenre)
        setVisibleGenre(!visibleGenre)
        setVisibleAuthor(false)
        setVisibleYear(false)
    }

    return (
        <S.CenterblockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <S.FilterContent>
                <S.FilterButton
                    $isActive={isActiveAuthorButton}
                    onClick={clickOnAuthorFilter}
                >
                    исполнителю
                </S.FilterButton>
                {visibleAuthor && AuthorList()}
            </S.FilterContent>
            <S.FilterContent>
                <S.FilterButton
                    $isActive={isActiveYearButton}
                    onClick={clickOnYearFilter}
                >
                    году выпуска
                </S.FilterButton>
                {visibleYear && YearList()}
            </S.FilterContent>
            <S.FilterContent>
                <S.FilterButton
                    $isActive={isActiveGenreButton}
                    onClick={clickOnGenreFilter}
                >
                    жанру
                </S.FilterButton>
                {visibleGenre && GenreList()}
            </S.FilterContent>
        </S.CenterblockFilter>
    )
}
