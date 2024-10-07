import {FC} from 'react'
import {Text, View, Image} from 'react-native'
import {useLocalSearchParams} from 'expo-router'
import tw from 'twrnc'

const ProductFullCard: FC = () => {
  const {product} = useLocalSearchParams()

  const parsedProduct =
    typeof product === 'string' ? JSON.parse(product) : product

  if (!parsedProduct) {
    return <Text>Продукт не найден</Text>
  }

  const {
    title,
    price,
    thumbnail,
    category,
    brand,
    description,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
  } = parsedProduct

  return (
    <View style={tw`flex-1 p-4`}>
      <Image
        source={{uri: thumbnail}}
        style={tw`w-full h-72 rounded-lg mb-4`}
      />
      <Text style={tw`text-xl font-bold mb-2`}>{title}</Text>
      <Text style={tw`text-lg text-gray-600 mb-2`}>Цена: ${price}</Text>
      <Text style={tw`text-base text-gray-700 mb-2`}>
        Категория: {category}
      </Text>
      <Text style={tw`text-base text-gray-700 mb-2`}>Бренд: {brand}</Text>
      <Text style={tw`text-base text-gray-700 mb-4`}>
        Описание: {description}
      </Text>
      <Text style={tw`text-base text-gray-700 mb-2`}>
        Гарантия: {warrantyInformation}
      </Text>
      <Text style={tw`text-base text-gray-700 mb-2`}>
        Информация о доставке: {shippingInformation}
      </Text>
      <Text style={tw`text-base text-gray-700`}>
        Статус доступности: {availabilityStatus}
      </Text>
    </View>
  )
}

export default ProductFullCard
