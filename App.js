import { SafeAreaView, StyleSheet } from 'react-native';
import { SingletonHooksContainer } from 'react-singleton-hook'
import { NavigationContainer } from '@react-navigation/native';
import { Header } from './src/Common';
import { TabNavigator } from './src/Navigation';
import colorPalette from './src/style/color-palette';

export default function App() {
  return (
    <>
      <SingletonHooksContainer />
      <SafeAreaView style={app.safeAreaView}/>
      <Header />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
}

const app = StyleSheet.create({
  safeAreaView: {
    flex: 0,
    backgroundColor: colorPalette.primary
  }
})