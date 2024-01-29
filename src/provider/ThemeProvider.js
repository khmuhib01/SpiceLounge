// themes/ThemeProvider.js
import React, {createContext, useContext} from 'react';
import colors from '../config/themes/colors';
import {useColorScheme} from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = isDarkMode ? colors.dark : colors.light;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
