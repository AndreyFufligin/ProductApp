import Container from '@/components/navigation/Container'
import React from 'react'
import {Image, Text, View} from 'react-native'
import ProductList from '@/components/Product/ProductList'
import Filter from '@/components/Filter/Filter'
import tw from 'twrnc'

export default function HomeScreen() {
  return (
    <Container>
      <View
        style={tw`flex-row items-center bg-slate-100 p-4 rounded-lg shadow-md`}
      >
        <Image
          source={require('@/icons/magazine.png')}
          style={tw`w-24 h-10`}
          resizeMode="contain"
        />
        <Text style={tw`text-lg font-bold  ml-4`}>Покупки для Вас</Text>
      </View>
      <Filter />
      <ProductList />
    </Container>
  )
}
