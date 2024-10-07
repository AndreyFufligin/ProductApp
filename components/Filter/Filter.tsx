import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  selectRatingFilter,
  setRatingFilter,
} from '../../store/slices/productFilter'
import tw from 'twrnc'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const ratingFilter = useSelector(selectRatingFilter)

  const handleTitleFilterChange = (text: string) => {
    dispatch(setTitleFilter(text))
  }

  const handleRatingFilterChange = () => {
    dispatch(setRatingFilter(ratingFilter === 4.0 ? null : 4.0))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <View style={tw`p-4`}>
      <TextInput
        style={tw`border border-gray-300 p-2 rounded`}
        value={titleFilter}
        placeholder="Фильтровать по заголовку ..."
        onChangeText={handleTitleFilterChange}
      />
      <TouchableOpacity
        style={tw`bg-blue-500 p-2 rounded mt-2`}
        onPress={handleRatingFilterChange}
      >
        <Text style={tw`text-white text-center`}>Фильтр по рейтингу</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-blue-500 p-2 rounded mt-2`}
        onPress={handleResetFilters}
      >
        <Text style={tw`text-white text-center`}>Сбросить фильтры</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Filter
