import React from "react";
import * as S from "./Search.styles"
import { useDispatch } from 'react-redux'
import { setFiltersPlaylist } from "../../store/slices/trackSlice";

function Search() {
  const dispatch = useDispatch()
  return (
    <S.centroblockSearch>
      <S.searchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.searchSvg>
      <S.searchText
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e) => {
          dispatch(
            setFiltersPlaylist({
              search: e.target.value,
            })
          )
        }}
      />
    </S.centroblockSearch>
  );
}
export default Search;
