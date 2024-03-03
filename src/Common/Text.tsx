import React from 'react'
import { Text as TextComponent, TextProps as TextComponentProps, StyleSheet } from 'react-native'
import colorPalette from '../style/color-palette'

export default function Text({ style, children, ...restProps }: TextComponentProps) {
  return (
    <TextComponent style={[text.default, style]} {...restProps}>
      {children}
    </TextComponent>
  )
}

const text = StyleSheet.create({
  default: {
    fontSize: 14,
    color: colorPalette.text
  }
})
