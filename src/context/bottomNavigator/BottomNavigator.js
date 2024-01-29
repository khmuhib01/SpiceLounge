import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import Settings from '../../screens/Settings';
import Home from '../../screens/Home';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../../screens/Cart';
import Profile from '../../screens/Profile';

import {useTheme} from '../../provider/ThemeProvider';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = useTheme();

  // console.log(theme);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={isDarkMode ? theme.primary : theme.primary} // Adjust the active color based on dark mode
      barStyle={{
        backgroundColor: isDarkMode ? '#1B222C' : '#ffffff',
        color: isDarkMode ? theme.primary : theme.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="tools" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
