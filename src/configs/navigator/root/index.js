import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Home, Splash, DetailTransaction} from '../../../pages';

const Stack = createStackNavigator();
const Root = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailTransaction"
          component={DetailTransaction}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Root;
