import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import BottomNavigator from './context/bottomNavigator/BottomNavigator';
import Settings from './screens/Settings';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import {StatusBar, useColorScheme} from 'react-native';
import {useTheme} from './provider/ThemeProvider';
import Login from './screens/Login';
import ProfileEdit from './screens/ProfileEdit';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import OrderHistory from './screens/OrderHistory';
import About from './screens/About';
import Terms from './screens/Terms';
import Info from './screens/Info';
import Review from './screens/Review';

const Stack = createNativeStackNavigator();

export default function Route() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();

  console.log(theme);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={isDarkMode ? theme.status : theme.status}
        style="light"
      />
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
          }}
        />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
        <Stack.Screen
          name="Review"
          component={Review}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? theme.primary : theme.primary,
            },
            headerTintColor: isDarkMode ? theme.appBarText : theme.appBarText,
          }}
        />
      </Stack.Navigator>
    </>
  );
}
