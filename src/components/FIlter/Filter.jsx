import React, { useState } from "react";
import * as S from "./Filter.styles";
//const S. = S..div``
export function FilterList(activeFilter) {
  if (activeFilter === "author") {
    return (
      <S.Modal>
        <S.ModalContent>
          <S.ModalContentText href="#">MACAN</S.ModalContentText>
          <S.ModalContentText href="#">XCX</S.ModalContentText>
          <S.ModalContentText href="#">Rihanna</S.ModalContentText>
          <S.ModalContentText href="#">DVRST</S.ModalContentText>
          <S.ModalContentText href="#">Aarne</S.ModalContentText>
          <S.ModalContentText href="#">Jony</S.ModalContentText>
        </S.ModalContent>
      </S.Modal>
    );
  }
  if (activeFilter === "year") {
    return (
      <S.Modal>
        <S.ModalContent>
          <S.ModalContentText href="#">1998</S.ModalContentText>
          <S.ModalContentText href="#">2000</S.ModalContentText>
          <S.ModalContentText href="#">2017</S.ModalContentText>
          <S.ModalContentText href="#">2020</S.ModalContentText>{" "}
          <S.ModalContentText href="#">2021</S.ModalContentText>{" "}
          <S.ModalContentText href="#">2023</S.ModalContentText>
        </S.ModalContent>
      </S.Modal>
    );
  }
  if (activeFilter === "genre") {
    return (
      <S.Modal>
        <S.ModalContent>
          <S.ModalContentText href="#">Hip-hop</S.ModalContentText>
          <S.ModalContentText href="#">Rock</S.ModalContentText>
          <S.ModalContentText href="#">Pop music</S.ModalContentText>
          <S.ModalContentText href="#">Techno</S.ModalContentText>
          <S.ModalContentText href="#">Indie</S.ModalContentText>
        </S.ModalContent>
      </S.Modal>
    );
  }
}

export function Filter() {
  const [activeFilter, setActiveFilter] = useState();
  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton
        onClick={() =>
          activeFilter !== "author"
            ? setActiveFilter("author")
            : setActiveFilter()
        }
      >
        {" "}
        исполнителю
        {activeFilter === "author" && FilterList(activeFilter)}
      </S.FilterButton>

      <S.FilterButton
        onClick={() =>
          activeFilter !== "year" ? setActiveFilter("year") : setActiveFilter()
        }
      >
        {" "}
        году выпуска
        {activeFilter === "year" && FilterList(activeFilter)}
      </S.FilterButton>

      <S.FilterButton
        onClick={() =>
          activeFilter !== "genre"
            ? setActiveFilter("genre")
            : setActiveFilter()
        }
      >
        жанру
        {activeFilter === "genre" && FilterList(activeFilter)}
      </S.FilterButton>
    </S.CenterblockFilter>
  );
}
