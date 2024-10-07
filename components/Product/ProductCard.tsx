import {FC} from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'

import {IProduct} from '../../models/IPoduct'
import {useRouter} from 'expo-router'

const ProductCard: FC<{product: IProduct & {id: number}}> = ({product}) => {
  const {title, price, thumbnail} = product

  const router = useRouter()

  const handlePress = () => {
    router.push({
      pathname: '/product',
      params: {
        product: JSON.stringify(product),
      },
    })
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{uri: thumbnail}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.price}>Цена: ${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 16,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
    maxWidth: '70%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  price: {
    fontSize: 14,
    color: '#4B5563',
  },
})

export default ProductCard
