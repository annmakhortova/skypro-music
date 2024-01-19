import { Skeleton } from "./skeleton-component"
import * as S from './skeleton.styles'
import { TrackPlayContain } from "../track-player/track-player.styles"

export const SkeletonTrackPlayer = () => {
    return (
      <TrackPlayContain>
        <S.LoadingTrackPlayImage>
          <Skeleton width="51px" height="51px" />
        </S.LoadingTrackPlayImage>
        <S.LoadingTrackPlayAuthor>
          <Skeleton width="59px" height="15px" />
        </S.LoadingTrackPlayAuthor>
        <S.LoadingTrackPlayAlbum>
          <Skeleton width="59px" height="15px" />
        </S.LoadingTrackPlayAlbum>
      </TrackPlayContain>
    )
  }