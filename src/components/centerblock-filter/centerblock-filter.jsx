import React from 'react'
import { useState } from 'react'
import * as S from './centerblock.styles'

const PerformerListFilter = () => {
  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        <S.FilterText>Nero</S.FilterText>
        <S.FilterText>Dynoro, Outwork, Mr. Gee</S.FilterText>
        <S.FilterText>Ali Backgor</S.FilterText>
        <S.FilterText>Стоункат, Psychopath</S.FilterText>
        <S.FilterText>Jaded, Will Clarke, AR/CO</S.FilterText>
        <S.FilterText>Blue Fountain, Zeds Dead</S.FilterText>
        <S.FilterText>
          HYBIT, Mr. Black, Offer Nissim, Hi Profile
        </S.FilterText>
        <S.FilterText>minthaze</S.FilterText>
        <S.FilterText>Calvin Harris, Disciples</S.FilterText>
        <S.FilterText>Tom Boxer</S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

const YearListFilter = () => {
  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        <S.FilterText>По умолчанию</S.FilterText>
        <S.FilterText>Сначала новые</S.FilterText>
        <S.FilterText>Сначала старые</S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

const GenreListFilter = () => {
  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        <S.FilterText>Хип-хоп</S.FilterText>
        <S.FilterText>Поп-музыка</S.FilterText>
        <S.FilterText>Техно</S.FilterText>
        <S.FilterText>Инди</S.FilterText>
        <S.FilterText>Рок-музыка</S.FilterText>
        <S.FilterText>Кантри</S.FilterText>
        <S.FilterText>Джаз</S.FilterText>
        <S.FilterText>Классическая</S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

export function CenterBlockFilter() {
  const [performerFilter, setPerformerFilter] = useState(false)
  const [yearFilter, setYearFilter] = useState(false)
  const [genreFilter, setGenreFilter] = useState(false)

  const togglePerformerCategory = () => {
    setPerformerFilter((prev) => !prev)
    setYearFilter(false)
    setGenreFilter(false)
  }

  const toggleYearCategory = () => {
    setYearFilter((prev) => !prev)
    setPerformerFilter(false)
    setGenreFilter(false)
  }

  const toggleGenreCategory = () => {
    setGenreFilter((prev) => !prev)
    setPerformerFilter(false)
    setYearFilter(false)
  }

  return (
    <S.CenterblockFilter className="filter">
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterBlock>
        <div className="filter__items">
          {performerFilter ? (
            <S.FilterButtonActive
              className="button-author _btn-text"
              onClick={togglePerformerCategory}
            >
              исполнителю
            </S.FilterButtonActive>
          ) : (
            <S.FilterButton
              className="button-author _btn-text"
              onClick={togglePerformerCategory}
            >
              исполнителю
            </S.FilterButton>
          )}
          {performerFilter ? <PerformerListFilter /> : null}
        </div>

        <div className="filter__items">
          {yearFilter ? (
            <S.FilterButtonActive
              className="button-author _btn-text"
              onClick={toggleYearCategory}
            >
              году выпуска
            </S.FilterButtonActive>
          ) : (
            <S.FilterButton
              className="button-author _btn-text"
              onClick={toggleYearCategory}
            >
              году выпуска
            </S.FilterButton>
          )}
          {yearFilter ? <YearListFilter /> : null}
        </div>

        <div className="filter__items">
          {genreFilter ? (
            <S.FilterButtonActive
              className="button-author _btn-text"
              onClick={toggleGenreCategory}
            >
              жанру
            </S.FilterButtonActive>
          ) : (
            <S.FilterButton
              className="button-author _btn-text"
              onClick={toggleGenreCategory}
            >
              жанру
            </S.FilterButton>
          )}
          {genreFilter ? <GenreListFilter /> : null}
        </div>
      </S.FilterBlock>
    </S.CenterblockFilter>
  )
}
