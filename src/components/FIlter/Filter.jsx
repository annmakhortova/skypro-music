import React from "react";
import * as S from "./Filter.styles"
import uniq from 'lodash.uniq'
import { useDispatch, useSelector } from 'react-redux'
import { TracksFilterCategory } from "./TrackFilterCategory";
import { setFiltersPlaylist } from "../../store/slices/trackSlice";
import { filtersPlaylistSelector } from "../../store/selectors";
import { useContext } from "react";
import Context from "../../context";

const { useState } = React;

export const Filter = () => {
  const dispatch = useDispatch()
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('')

  const selectedFiltersPlaylist = useSelector(filtersPlaylistSelector)
  const { tracks } = useContext(Context);

  return (
    <S.CenterBlockFilter>
      <S.filterDiv>
        <S.filterTitle>Искать по:</S.filterTitle>
        <TracksFilterCategory
          nameCategory="исполнителю"
          numberSelectedValues={selectedFiltersPlaylist?.authors.length}
          content={uniq(
            tracks?.map((track) => track?.author)
          ).map((author) => (
            <S.FilterItem
              key={author}
              onClick={() => {
                dispatch(setFiltersPlaylist({ authors: author }))
              }}
              $isSelected={selectedFiltersPlaylist?.authors.includes(author)}
            >
              {author}
            </S.FilterItem>
          ))}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
        />
        {(
          <TracksFilterCategory
            nameCategory="жанру"
            isActiveCategory={activeCategoryFilter}
            setActiveCategory={setActiveCategoryFilter}
            numberSelectedValues={selectedFiltersPlaylist?.genres.length}
            content={uniq(
              tracks?.map((track) => track.genre)
            ).map((genre) => (
              <S.FilterItem
                key={genre}
                onClick={() => {
                  dispatch(setFiltersPlaylist({ genres: genre }))
                }}
                $isSelected={selectedFiltersPlaylist?.genres.includes(genre)}
              >
                {genre}
              </S.FilterItem>
            ))}
          />
        )}
      </S.filterDiv>
      <S.filterDiv>
        <S.filterTitle>Сортировка:</S.filterTitle>
        <TracksFilterCategory
          nameCategory={selectedFiltersPlaylist?.sort}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
          numberSelectedValues={
            selectedFiltersPlaylist?.sort === 'По умолчанию' ? 0 : 1
          }
          content={['По умолчанию', 'Сначала новые', 'Сначала старые'].map(
            (item) => (
              <S.FilterItem
                key={item}
                onClick={() => {
                  dispatch(setFiltersPlaylist({ sort: item }))
                }}
                $isSelected={selectedFiltersPlaylist?.sort.includes(item)}
              >
                {item}
              </S.FilterItem>
            )
          )}
        />
      </S.filterDiv>
    </S.CenterBlockFilter>
  )
}