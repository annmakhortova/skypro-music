import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./SideBar.styles";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../../context";

function Sidebar({ loading }) {
  const authData = JSON.parse(localStorage.getItem("authData"));
  function logOut() {
    localStorage.removeItem("authData");
    window.location.href = "/login";
  }

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{authData.user.username}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={logOut}>
          <svg alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={150}
              width={250}
            >
              {loading ? (
                <Skeleton />
              ) : (
                <Link
                  to={"/categorySongs/1"}
                  style={{ width: "100%", height: "100%" }}
                >
                  <S.SidebarImg
                    src="/img/classic_music.png"
                    alt="day's playlist"
                  />
                </Link>
              )}
            </SkeletonTheme>
          </S.SidebarItem>
          <S.SidebarItem>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={150}
              width={250}
            >
              {loading ? (
                <Skeleton />
              ) : (
                <Link
                  to={"/categorySongs/2"}
                  style={{ width: "100%", height: "100%" }}
                >
                  <S.SidebarImg
                    src="/img/electro_music.png"
                    alt="day's playlist"
                  />
                </Link>
              )}
            </SkeletonTheme>
          </S.SidebarItem>
          <S.SidebarItem>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={150}
              width={250}
            >
              {loading ? (
                <Skeleton />
              ) : (
                <Link
                  to={"/categorySongs/3"}
                  style={{ width: "100%", height: "100%" }}
                >
                  <S.SidebarImg
                    src="/img/rock_music.png"
                    alt="day's playlist"
                  />
                </Link>
              )}
            </SkeletonTheme>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
export default Sidebar;
