import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchProducts} from '../acitionCreaters/productActionCreators'
import {IProduct} from '../../models/IProduct'

export interface ProductListResponse {
  results: IProduct[]
}

export interface ProductState {
  data: IProduct[]
  isLoading: boolean
  error: string
}

const initialState: ProductState = {
  data: [],
  isLoading: false,
  error: '',
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductListResponse>) => {
          state.isLoading = false
          state.error = ''
          state.data = action.payload.results
        },
      )
      .addCase(
        fetchProducts.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false
          state.error = action.payload || 'Ошибка при загрузке продуктов'
        },
      )
  },
})

export default productSlice.reducer
