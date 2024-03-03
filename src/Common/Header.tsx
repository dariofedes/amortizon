import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import CartBadge from '../Cart/CartBadge'
import colorPalette from '../style/color-palette'

export default function Header() {
  return (
    <View style={header.container}>
      <Image resizeMethod='resize' resizeMode='contain' style={header.logo} source={require('../../assets/logo.png')} />
      <CartBadge />
    </View>
  )
}

const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    paddingTop: 25,
    backgroundColor: colorPalette.primary
  },
  
  logo: {
    height: 40,
    maxWidth: 120,
  }
})
