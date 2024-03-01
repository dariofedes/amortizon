import { TouchableOpacity, Text, StyleSheet } from "react-native"
import colorPalette from "../style/color-palette"

export default function Button({ onPress, title, disabled, variant = 'primary', style, children }) {
  return (
    <TouchableOpacity style={[button.container, button.container[variant], disabled && button.container.disabled]}
      disabled={disabled}
      onPress={onPress}
    >
      {
        children 
        ? children
        : <Text style={button.title}>{title}</Text>
      }
    </TouchableOpacity>
  )
}

const button = StyleSheet.create({
  container: {
    
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',

    disabled: {
      backgroundColor: colorPalette.disabled
    },

    primary: {
      backgroundColor: colorPalette.cta,
    },

    secondary: {
      backgroundColor: colorPalette.secondary,
      borderWidth: 1,
      borderColor: colorPalette.border,
    }
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
  }
})