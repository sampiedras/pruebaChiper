import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '@screens/Splash/Splash';
import Publications from '@screens/Publications/Publications';
import WebViewReddit from '@screens/WebViewReddit/WebViewReddit';

enableScreens();
const Stack = createNativeStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTintColor: 'white',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Publications"
        component={Publications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WebViewReddit"
        component={WebViewReddit}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
