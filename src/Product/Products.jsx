import { View, StyleSheet } from 'react-native'
import { Text, Checkbox } from '../Common'
import useProducts from './useProducts'
import ProductsList from './ProductsList'
import useFilters from './useFilters'

export default function Products() {
  const { isLoading, results, getNextPage } = useProducts
()
  const { stockOnly, setStockOnly } = useFilters()

  return (
    <View style={products.container}>
      {
        isLoading
        ? <Text>loading...</Text>
        : <View style={products.products}>
          <View style={products.filters}>
            <Checkbox style={products.checkbox} label="On stock only" value={stockOnly} onPress={() => setStockOnly(prevStockOnly => !prevStockOnly)} />
          </View>
          <ProductsList results={results} getNextPage={getNextPage} />
        </View>
      }
    </View>
  )
}

const products = StyleSheet.create({
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
})