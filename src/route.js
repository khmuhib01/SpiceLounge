import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import BottomNavigator from './context/bottomNavigator/BottomNavigator';
import Settings from './screens/Settings';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import {StatusBar} from 'react-native';
import {useTheme} from './provider/ThemeProvider';

const Stack = createNativeStackNavigator();

export default function Route() {
  const theme = useTheme();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.status} />
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </>
  );
}
