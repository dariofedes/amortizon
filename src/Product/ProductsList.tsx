import React from 'react'
import { FlatList, StyleSheet } from "react-native"
import ProductCard from "./ProductCard"
import Product from './Product'

export default function ProductsList({ products, getNextPage }: ProductListProps) {
  return (
    <FlatList
      style={productsList.container}
      contentContainerStyle={{ gap: 8, paddingBottom: 60 }}
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={item => item.id}
      onEndReached={getNextPage}
      onEndReachedThreshold={0.5}
    />
  )
}

type ProductListProps = {
  products: Product[],
  getNextPage: any,
}

const productsList = StyleSheet.create({
  container: { 
  }
})