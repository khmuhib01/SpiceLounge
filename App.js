import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import allReducers from './src/redux/allReducers';
import Route from './src/route';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from './src/provider/ThemeProvider';

const store = configureStore({
  reducer: allReducers,
});

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <Route />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}
