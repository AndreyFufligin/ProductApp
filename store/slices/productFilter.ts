import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IFilterState {
  title: string
  rating: number | null
}

const initialState: IFilterState = {
  title: '',
  rating: null,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setRatingFilter: (state, action: PayloadAction<number | null>) => {
      state.rating = action.payload
    },
    resetFilters: () => initialState,
  },
})

export const {setTitleFilter, resetFilters, setRatingFilter} =
  filterSlice.actions
export const selectTitleFilter = (state: {filter: IFilterState}) =>
  state.filter.title
export const selectRatingFilter = (state: {filter: IFilterState}) =>
  state.filter.rating

export default filterSlice.reducer
