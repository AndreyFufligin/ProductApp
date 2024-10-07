import React, {FC, useEffect} from 'react'
import {Text, ActivityIndicator, Image, ScrollView} from 'react-native'
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {fetchProducts} from '../../store/acitionCreaters/productActionCreators'
import {
  selectRatingFilter,
  selectTitleFilter,
} from '../../store/slices/productFilter'

import tw from 'twrnc'
import ProductCard from './ProductCard'

const ProductList: FC = () => {
  const dispatch = useAppDispatch()
  const {data, error, isLoading} = useAppSelector((state) => state.product)

  const titleFilter = useAppSelector(selectTitleFilter)
  const ratingFilter = useAppSelector(selectRatingFilter)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  if (error) {
    return <Text>Error: {error}</Text>
  }

  const filteredProducts = data.filter((product) => {
    const matchesTitle = product.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesRating = ratingFilter ? product.rating >= ratingFilter : true
    return matchesTitle && matchesRating
  })

  return (
    <ScrollView style={tw`p-4`}>
      {filteredProducts.length === 0 ? (
        <Text>Нет доступных продуктов</Text>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </ScrollView>
  )
}

export default ProductList
