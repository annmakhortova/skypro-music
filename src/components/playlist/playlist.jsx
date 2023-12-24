import React from 'react'
import { SkeletonPlaylistItems } from '../skeleton/skeleton-component'
import * as S from './playlist.styles'

import { PlaylistItem } from './playlist-item'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentPlaylistSelector,
  filteredPlaylistSelector,
  filtersSelector,
  selectIsLoading,
} from '../../store/selectors/selectors'
import {
  useGetAllTracksQuery,
  useGetFavouriteTracksQuery,
} from '../../services/playlists'

import {
  setIsLoading,
  setCurrentPlaylist,
  setFilteredPlaylist,
} from '../../store/slices/trackSlice' //

export const Playlist = ({ tracks }) => {
  const { isFetching } = useGetAllTracksQuery()
  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  const secondsToMinutes = (sec) => {
    const min = Math.trunc(sec / 60) + ''
    sec = (sec % 60) + ''
    return min.padStart(2, 0) + ':' + sec.padStart(2, 0)
  }

  const filteredPlaylist = useSelector(filteredPlaylistSelector)
  const filters = useSelector(filtersSelector)

  const sortReleaseDate = (a, b) => {
    const firstDate = new Date(a)
    const secondDate = new Date(b)

    if (firstDate < secondDate) {
      return -1
    } else if (firstDate > secondDate) {
      return 1
    } else {
      return 0
    }
  }

  useEffect(() => {
    if (tracks) {
      let newFilteredPlaylist = [...tracks]

      if (filters.searchValue.length) {
        newFilteredPlaylist = [
          ...tracks.filter(
            (track) =>
              track.name
                .toLowerCase()
                .includes(filters.searchValue.toLowerCase()) ||
              track.author
                .toLowerCase()
                .includes(filters.searchValue.toLowerCase()),
          ),
        ]
      }
      
      if (filters.years === 'Сначала новые') {
        newFilteredPlaylist = newFilteredPlaylist.sort((a, b) =>
         sortReleaseDate(a.release_date, b.release_date),
        ).reverse()
      }
      
      if (filters.years === 'Сначала старые') {
        newFilteredPlaylist = newFilteredPlaylist.sort((a, b) =>
          sortReleaseDate(a.release_date, b.release_date),
        )
      }

      if (filters.genre) {
        newFilteredPlaylist = [
          ...newFilteredPlaylist.filter((track) =>
            filters.genre.includes(track.genre),
          ),
        ]
      }

      if (filters.authors) {
        newFilteredPlaylist = [
          ...newFilteredPlaylist.filter((track) =>
            filters.authors.includes(track.author),
          ),
        ]
      }

      dispatch(setFilteredPlaylist(newFilteredPlaylist))
    }
  }, [filters, tracks])

  return (
    <S.ContentPlaylist className="playlist">
      {filters.status ? (
        filteredPlaylist?.map((track) => (
          <PlaylistItem
            track={track}
            key={track.id}
            title={track.name}
            link={track.track_file}
            author={track.author}
            authorLink={track.authorLink}
            album={track.album}
            albumLink={track.albumLink}
            time={secondsToMinutes(track.duration_in_seconds)}
          />
        ))
      ) : (
        <div className="content__playlist-items">
          {isLoading && isFetching ? (
            <SkeletonPlaylistItems />
          ) : (
            tracks?.map((track) => (
              <PlaylistItem
                track={track}
                key={track.id}
                title={track.name}
                link={track.track_file}
                author={track.author}
                authorLink={track.authorLink}
                album={track.album}
                albumLink={track.albumLink}
                time={secondsToMinutes(track.duration_in_seconds)}
              />
            ))
          )}
        </div>
      )}
    </S.ContentPlaylist>
  )
}