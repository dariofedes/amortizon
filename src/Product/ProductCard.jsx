import { Text, View, Image, StyleSheet } from 'react-native'
import { Button } from '../Common'
import DeliveryTimeService from './DeliveryTimeService'
import { useCart } from '../Cart'
import colorPalette from '../style/color-palette'

export default function ProductCard({ product }) {
  const { getDeliveryTime } = DeliveryTimeService()
  const { addProductToCart, isProductInCart } = useCart()

  return (
    <View style={productCard.container}>
      <Image style={productCard.image} source={{ uri: product.image }} />
      <View style={productCard.details}>
        <View style={productCard.description}>
          <Text style={productCard.name}>{product.name}</Text>
          <Text style={productCard.price}>{product.price}:$</Text>
          {
            product.hasStock
            ? <Text style={productCard.deliveryInfo}>Delivery <Text style={productCard.deliveryDate}>{getDeliveryTime(product)}</Text></Text>
            : <Text>Not available</Text>
          }
        </View>
        <Button title={isProductInCart(product.id) ? 'Already in cart' : 'Add to cart'} disabled={!product.hasStock || isProductInCart(product.id)} onPress={() => addProductToCart(product)} />
      </View>
    </View>
  )
}

const productCard = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colorPalette.border,
    backgroundColor: colorPalette.secondary,
    borderRadius: 5,
    overflow: 'hidden',
    minHeight: 150,
  },

  image: {
    width: 150,
    height: '100%',
  },

  details: {
    padding: 8,
    justifyContent: 'space-between',
    flexGrow: 1,
  },

  description: {
    marginBottom: 16,
  },

  name: {
    fontSize: 18
  },

  price: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 8
  },

  deliveryInfo: {

  },

  deliveryDate: {
    fontWeight: '600'
  },
})