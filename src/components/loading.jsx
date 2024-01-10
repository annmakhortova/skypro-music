import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from "./Track/Track.styled"

export function Loading(){
    return(
        <div>
            <LoadingTrack/>
            <LoadingTrack/>
            <LoadingTrack/>
            <LoadingTrack/>
            <LoadingTrack/>
            <LoadingTrack/>
        </div>
    )
}

export default function LoadingTrack() {
    return(
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
                <Skeleton />
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <SkeletonTheme
                baseColor="#313131"
                highlightColor="#fff"
                height={20}
                width={356}
              >
                  <Skeleton />
              </SkeletonTheme>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={20}
              width={272}
            >
                <Skeleton />
            </SkeletonTheme>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={20}
              width={240}
            >
                <Skeleton />
            </SkeletonTheme>
            </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>
              {" "}
              {"0.00"}
            </S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    )
    }