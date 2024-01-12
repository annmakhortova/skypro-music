import { useState } from "react";
import { NavMyPlaylist } from "../MyPlaylist";
import { SighInButton } from "../SingIn";
import { NavMain } from "../Main";
import React from "react";
import * as S from "./NavMenu.styles";

export function NavMenu() {
  const [visible, setVisible] = useState(false);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>

      <S.Burger>
        <div
          onClick={() => {
            setVisible(!visible);
          }}
          role="button"
        >
          <S.ClickButton src="img/burger.png" alt="logo" />
        </div>
      </S.Burger>
      <S.NavMenu>
        {visible && (
          <S.MenuList>
            <NavMain />
            <NavMyPlaylist />
            <SighInButton />
          </S.MenuList>
        )}
      </S.NavMenu>
    </S.MainNav>
  );
}

