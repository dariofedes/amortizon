import { FlatList, StyleSheet } from "react-native"
import CartProductCard from "./CartProductCard"

export default function CartProductsList({ cartProducts }) {
  return (
    <FlatList
      style={cartProductsList.container}
      contentContainerStyle={{ gap: 8, paddingBottom: 60 }}
      data={cartProducts}
      renderItem={({ item }) => <CartProductCard cartProduct={item} />}
      keyExtractor={item => item.id}
    />
  )
}

const cartProductsList = StyleSheet.create({
  container: { 
  }
})