import * as S from '../playlist/playlist.styles'
import * as L from './skeleton.styles'

export function Skeleton({ width, height }) {
  const style = {
    width: width,
    height: height,
    backgroundColor: '#313131',
  }
  return <div style={style} />
}

const SkeletonPlaylistItemPattern = () => {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <L.LoadingTrackTitleImage>
            <Skeleton width="51px" height="51px" />
          </L.LoadingTrackTitleImage>
          <L.LoadingTrackTitleText>
            <Skeleton width="356px" height="19px" />
          </L.LoadingTrackTitleText>
        </S.TrackTitle>
        <L.LoadingTrackAuthor>
          <Skeleton width="271px" height="19px" />
        </L.LoadingTrackAuthor>
        <L.LoadingTrackAlbum>
          <Skeleton width="305px" height="19px" />
        </L.LoadingTrackAlbum>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export const SkeletonPlaylistItems = () => {
  return (
    <div className="content__playlist-items">
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
      <SkeletonPlaylistItemPattern />
    </div>
  )
}
