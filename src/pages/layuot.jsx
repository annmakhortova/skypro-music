import React from 'react'
import * as S from './Filter.styles'

export const TracksFilterCategory = ({ nameCategory, content, isActiveCategory, setActiveCategory, numberSelectedValues }) => {
  return (
    <S.FilterCategoryName>
      <S.FilterButton
        type="button"
        onClick={() => setActiveCategory(isActiveCategory === nameCategory ? '' : nameCategory)}
        className={isActiveCategory === nameCategory}
      >
        {nameCategory}
      </S.FilterButton>

      {numberSelectedValues > 0 && (
        <S.selectedFilterCount>{numberSelectedValues}</S.selectedFilterCount>
      )}

      {isActiveCategory === nameCategory && (
        <S.FilterCategoryMenu>
          <S.FilterList>{content}</S.FilterList>
        </S.FilterCategoryMenu>
      )}
    </S.FilterCategoryName>
  )
}