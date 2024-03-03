import React from 'react';
import { View, StyleSheet } from "react-native";
import { Text } from '../Common'
import useCart from "./useCart";
import CartProductsList from "./CartProductsList";

export default function Cart() {
  const { products, total } = useCart()

  return (
    <View style={cart.container}>
      <View style={cart.totalContainer}>
        <Text style={cart.totalLabel}>Total: </Text>
        <Text style={cart.total}>{total}:$</Text>
      </View>
      <CartProductsList cartProducts={products} />
    </View>
  )
}

const cart = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 16,
  },

  totalLabel: {
    fontSize: 24,
  },

  total: {
    fontSize: 24,
    fontWeight: '700',
  }
})
