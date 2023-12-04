import { createSlice } from '@reduxjs/toolkit'

const initialState = '';

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch: (state, { payload }) => payload,
        resetSearch: () => initialState
    }
})

export const { changeSearch, resetSearch } = searchSlice.actions