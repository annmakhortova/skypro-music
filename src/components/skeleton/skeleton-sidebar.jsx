import * as S from './skeleton.styles'
import { Skeleton } from './skeleton-component'
import { SidebarList } from '../sidebar/sidebar.styles'

export const SkeletonSidebarList = () => {
    return (
      <SidebarList>
        <S.LoadingSidebarItem>
          <Skeleton width="250px" height="150px" />
        </S.LoadingSidebarItem>
        <S.LoadingSidebarItem>
          <Skeleton width="250px" height="150px" />
        </S.LoadingSidebarItem>
        <S.LoadingSidebarItem>
          <Skeleton width="250px" height="150px" />
        </S.LoadingSidebarItem>
      </SidebarList>
    )
  }