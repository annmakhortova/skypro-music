import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../api/trackApi'

const accessToken = () => {
  const accessToken = JSON.parse(localStorage.getItem('token'))
  if(!accessToken) {
    return
  }
  return accessToken.token.access
}

const DATA_TAG = { type: 'Tracks', id: 'LIST' }

export const playlistApi = createApi({
  reducerPath: 'playlistApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    tagTypes: ['Tracks'],
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: 'catalog/track/all/',
        method: 'GET',
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    getFavouriteTracks: builder.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken()}`,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    addFavouriteTracks: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken()}`,
        },
      }),
      invalidatesTags: [DATA_TAG],
    }),

    deleteFavouriteTracks: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken()}`,
        },
      }),
      invalidatesTags: [DATA_TAG],
    }),
  }),
})

export const {
  useGetFavouriteTracksQuery,
  useGetAllTracksQuery,
  useAddFavouriteTracksMutation,
  useDeleteFavouriteTracksMutation,
} = playlistApi