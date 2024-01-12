import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import * as S from "./SideBar.styles";
import { SidebarLink } from "./SideBar.styles";

import { useAuth } from "../../auth";
//const S. = S..div``
export function SideBar() {
  const [isLoading, setLoading] = useState(false);
  const { auth } = useAuth();
  console.log(auth);
  setTimeout(() => {
    setLoading(true);
  }, 2000);
  return (
    <S.MainSidebar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>{auth.email}</S.SideBarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList>
          <S.SideItem>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={150}
              width={250}
            >
              {isLoading ? (
                <SidebarLink to="/category/1">
                  <S.SideBarImg src="img/playlist01.png" alt="day's playlist" />
                </SidebarLink>
              ) : (
                <Skeleton />
              )}
            </SkeletonTheme>
          </S.SideItem>
          <S.SideItem>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={150}
              width={250}
            >
              {isLoading ? (
                <SidebarLink to="/category/2">
                  <S.SideBarImg src="img/playlist02.png" alt="day's playlist" />
                </SidebarLink>
              ) : (
                <Skeleton />
              )}
            </SkeletonTheme>
          </S.SideItem>
          <S.SideItem>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={150}
              width={250}
            >
              {isLoading ? (
                <SidebarLink to="/category/3">
                  <S.SideBarImg src="img/playlist03.png" alt="day's playlist" />
                </SidebarLink>
              ) : (
                <Skeleton />
              )}
            </SkeletonTheme>
          </S.SideItem>
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSidebar>
  );
}
