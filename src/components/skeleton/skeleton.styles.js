import { styled, keyframes } from 'styled-components'
import {
  TrackTitleImage,
  TrackAuthor,
  TrackAlbum,
} from '../playlist/playlist.styles'
import { SidebarItem } from '../sidebar/sidebar.styles'
import {
  TrackPlayAlbum,
  TrackPlayAuthor,
  TrackPlayImage,
} from '../track-player/track-player.styles'
import { css } from 'styled-components'

const animation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`
const animatedSkeleton = css`
  animation: ${animation} 1s infinite alternate;
`

export const LoadingTrackTitleImage = styled(TrackTitleImage)`
  ${animatedSkeleton}
`
export const LoadingTrackTitleText = styled.div`
  ${animatedSkeleton}
  width: 356px
`
export const LoadingTrackAuthor = styled(TrackAuthor)`
  ${animatedSkeleton};
  width: 271px;
`

export const LoadingTrackAlbum = styled(TrackAlbum)`
  ${animatedSkeleton}
  width: 305px;
`

export const LoadingSidebarItem = styled(SidebarItem)`${animatedSkeleton}`
export const LoadingTrackPlayImage = styled(TrackPlayImage)`${animatedSkeleton}`
export const LoadingTrackPlayAuthor = styled(TrackPlayAuthor)`${animatedSkeleton}`
export const LoadingTrackPlayAlbum = styled(TrackPlayAlbum)`${animatedSkeleton}`