import React from "react";
import * as S from "./NavMenu.styles"
import { useDispatch} from "react-redux";
import { setAccess, setRefresh, setUserData } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const { useState } = React;

function NavMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  function handleLogout() {
    localStorage.removeItem("authData")
    dispatch(setUserData(null))
    dispatch(setRefresh(""))
    dispatch(setAccess(""))
    navigate("/login")
  };

  return (
    <S.mainNav>
      <S.navLogo>
        <S.logoImage src="/img/logo.png" alt="logo" />
      </S.navLogo>
      <S.navBurger onClick={toggleVisibility}>
        <S.burgerLine></S.burgerLine>
        <S.burgerLine></S.burgerLine>
        <S.burgerLine></S.burgerLine>
      </S.navBurger>
      {visible && (
        <S.navMenu>
          <S.menuList>
            <S.menuItem>
              <S.MenuLink  
              to="/">
                Главное
              </S.MenuLink>
            </S.menuItem>
            <S.menuItem>
              <S.MenuLink to="/favorites">
                Мой плейлист
              </S.MenuLink>
            </S.menuItem>
            <S.menuItem>
              <S.MenuLink to="/login" onClick={() => handleLogout()}>
                Выйти
              </S.MenuLink>
            </S.menuItem>
          </S.menuList>
        </S.navMenu>
      )}
    </S.mainNav>
  );
}

export default NavMenu;
