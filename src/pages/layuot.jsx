import * as S from "./styles/Main.styles";
import React from "react";

import NavMenu from "../components/NavMenu/NavMenu";
import Search from "../components/Search/Search";
import Bar from "../components/Bar/Bar";
import Sidebar from "../components/Sidebar/Sidebar";
import GlobalStyle from "./styles/Main.styles";
import { useContext } from "react";
import Context from "../context";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const { user, setUser, loading } = useContext(Context);
  const currentTrack = useSelector((state) => state.playlist.currentTrack);

  return (
    <S.wrapper>
      <GlobalStyle />
      <S.container>
        <S.main>
          <NavMenu user={user} setUser={setUser} />
          <S.centroblock>
            <Search />

            <Outlet />
          </S.centroblock>
          <Sidebar loading={loading} />
        </S.main>
        {currentTrack ? (
          <Bar loading={loading} currentTrack={currentTrack} />
        ) : null}
        <S.footer></S.footer>
      </S.container>
    </S.wrapper>
  );
};
