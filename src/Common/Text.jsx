import { Text as TextComponent, StyleSheet } from 'react-native'
import colorPalette from '../style/color-palette'

export default function Text({ style, children, ...restProps }) {
  return (
    <TextComponent style={[text, style]} {...restProps}>
      {children}
    </TextComponent>
  )
}

const text = StyleSheet.create({
  fontSize: 14,
  color: colorPalette.text,
})