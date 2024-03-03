import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Products } from '../Product';
import { Cart } from '../Cart';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import colorPalette from '../style/color-palette';

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
            paddingBottom: 30,
            height: 80,
            borderTopColor: colorPalette.border,
            borderTopWidth: 1
        },
        tabBarHideOnKeyboard: true
    }}
    >
      <Tab.Screen name="Products" component={Products} options={{ tabBarIcon: ({focused}) => <FontAwesome name="th-list" size={20} color={focused ? colorPalette.text : colorPalette.inactive} />  }} />
      <Tab.Screen name="Cart" component={Cart} options={{ tabBarIcon: ({focused}) => <FontAwesome5 name="shopping-cart" size={20} color={focused ? colorPalette.text : colorPalette.inactive} />  }} />
    </Tab.Navigator>
  );
}