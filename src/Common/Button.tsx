import React from 'react'
import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native"
import Text from './Text'
import colorPalette from "../style/color-palette"

export default function Button({ onPress, title, disabled, variant = 'primary', style, children }: ButtonProps) {
  return (
    <TouchableOpacity style={[button.container, button.container[variant], disabled && button.container.disabled, style]}
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

interface ButtonProps extends TouchableOpacityProps {
  title: string,
  variant?: string
}

const button = StyleSheet.create({
  container: {
    
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',

    disabled: {
      backgroundColor: colorPalette.inactive
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
    color: colorPalette.text
  }
})