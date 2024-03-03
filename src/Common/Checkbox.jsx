import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Text from './Text'
import ExpoCheckbox from 'expo-checkbox';
import colorPalette from "../style/color-palette";

export default function Checkbox({ label, value, onPress, style }) {
  return (
    <TouchableWithoutFeedback style={style} onPress={() => onPress()}>
      <View style={checkbox.container}>
        <ExpoCheckbox onValueChange={() => onPress()} style={checkbox.checkbox} value={value} color={colorPalette.text} />
        <Text style={checkbox.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const checkbox = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    margin: 8,
  },

  label: {
    fontSize: 16,
  }
})