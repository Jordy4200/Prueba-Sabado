import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './srs/navegacion/StackNavigator';
//import { MainScreen } from './srs/screens/MainScreen';


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;