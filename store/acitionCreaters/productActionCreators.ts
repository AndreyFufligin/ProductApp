import {createAsyncThunk} from '@reduxjs/toolkit'
import {Axios} from '../../api/axios'
import {IProduct} from '../../models/IPoduct'
import {ProductListResponse} from '../../store/slices/productSlices'

export const fetchProducts = createAsyncThunk<
  ProductListResponse,
  void,
  {rejectValue: string}
>('product/fetchProducts', async (_, thunkAPI) => {
  try {
    const response = await Axios.get<{products: IProduct[]}>('products')
    console.log('Response:', response.data)
    return {results: response.data.products}
  } catch (error) {
    console.error('Fetch error:', error)
    return thunkAPI.rejectWithValue(
      'Не удалось загрузить информацию о продуктах',
    )
  }
})
