import { View, Image, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Text, Button } from '../Common'
import useCart from './useCart'
import colorPalette from '../style/color-palette'

export default function CartProductCard({ cartProduct }) {
  const { addOne, removeOne, removeProductFromCart, count } = useCart()

  return (
    <View style={cartProductCard.container}>
      <View style={cartProductCard.product}>
        <Image style={cartProductCard.image} source={{ uri: cartProduct.image }} />
        <View style={cartProductCard.details}>
          <Text style={cartProductCard.name}>{cartProduct.name}</Text>
          <Text style={cartProductCard.price}>{cartProduct.id * 100}:$</Text>
        </View>
      </View>
      <View style={cartProductCard.actions}>
        <View style={cartProductCard.quantitySelector}>
          {
            cartProduct.quantity === 1
            ? <Button onPress={() => removeProductFromCart(cartProduct)}>
              <MaterialIcons size={20} name="delete" color={colorPalette.text} />
            </Button>
            : <Button onPress={() => removeOne(cartProduct)}>
              <MaterialIcons size={20} name="remove-circle-outline" color={colorPalette.text} />
            </Button>
          }
          <Text style={cartProductCard.quantity}>{cartProduct.quantity}</Text>
          <Button  onPress={() => addOne(cartProduct)}>
            <MaterialIcons size={20} name="add-circle-outline" color={colorPalette.text} />
          </Button>
        </View>
        <Button title="Remove from cart" onPress={() => removeProductFromCart(cartProduct)} variant='secondary' />
      </View>
    </View>
  )
}

const cartProductCard = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colorPalette.border,
    backgroundColor: colorPalette.secondary,
    borderRadius: 5,
  },
  
  product: {
    flexDirection: 'row',
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

  name: {
    fontSize: 18
  },

  price: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 8
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },

  quantitySelector: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quantity: {
    fontSize: 16,
  },
})