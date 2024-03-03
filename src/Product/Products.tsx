import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Checkbox } from '../Common'
import useProducts from './useProducts'
import ProductsList from './ProductsList'
import useFilters from './useFilters'

export default function Products() {
  const { isLoading, products, getNextPage } = useProducts()
  const { stockOnly, setStockOnly } = useFilters()

  return (
    <View style={productsScreen.container}>
      {
        isLoading
        ? <Text>loading...</Text>
        : <View style={productsScreen.products}>
          <View style={productsScreen.filters}>
            <Checkbox style={productsScreen.checkbox} label="On stock only" value={stockOnly} onPress={() => setStockOnly(prevStockOnly => !prevStockOnly)} />
          </View>
          <ProductsList products={products} getNextPage={getNextPage} />
        </View>
      }
    </View>
  )
}

const productsScreen = StyleSheet.create({
  container: {
    flex: 1,
  },

  products: {
    padding: 8,
    gap: 8,
  },

  filters: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  checkbox: {

  }
})