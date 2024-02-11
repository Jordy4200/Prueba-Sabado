import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';
import { SecondScreen } from '../screens/SecondScreen';
import { TerceroScreen } from '../screens/TerceroScreen';
import { CuartoScreen } from '../screens/CuartoScreen';
import { QuintoScreen } from '../screens/QuintoScreen';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" options={{headerShown:false}} component={MainScreen} />
      <Stack.Screen name="SecondScreen" options={{headerShown:false}} component={SecondScreen} />
      <Stack.Screen name="TerceroScreen" options={{headerShown:false}} component={TerceroScreen} />
      <Stack.Screen name="CuartoScreen" options={{headerShown:false}} component={CuartoScreen} />
      <Stack.Screen name="QuintoScreen" options={{headerShown:false}} component={QuintoScreen} />
    </Stack.Navigator>
  );
}