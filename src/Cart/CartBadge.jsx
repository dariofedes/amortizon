import { View, StyleSheet } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Text } from '../Common'
import useCart from './useCart'
import colorPalette from '../style/color-palette'

export default function CartBadge() {
  const { count } = useCart()

  return (
    <View style={cart.container}>
      <FontAwesome5 name='shopping-cart' size={20} color={colorPalette.text} />
      <Text style={cart.itemsCount}>{count}</Text>
    </View>
  )
}

const cart = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  icon: {

  },

  itemsCount: {
    fontSize: 20
  },
})