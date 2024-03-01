import { View, Text, StyleSheet } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import useCart from './useCart'

export default function CartBadge() {
  const { count } = useCart()

  return (
    <View style={cart.container}>
      <FontAwesome5 name='shopping-cart' size={20} color='black' />
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