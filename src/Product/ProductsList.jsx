import { FlatList, StyleSheet } from "react-native"
import ProductCard from "./ProductCard"

export default function ProductsList({ results, getNextPage }) {
  return (
    <FlatList
      style={productsList.container}
      contentContainerStyle={{ gap: 8, paddingBottom: 60 }}
      data={results}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={item => item.id}
      onEndReached={getNextPage}
      onEndReachedThreshold={0.5}
    />
  )
}

const productsList = StyleSheet.create({
  container: { 
  }
})