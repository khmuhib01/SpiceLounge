import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useTheme} from '../provider/ThemeProvider';

export default function CustomTouchableButton({onPress, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();
  const buttonBackgroundColor = isDarkMode ? theme.primary : theme.primary;
  const textColor = isDarkMode ? 'white' : 'white';

  const styles = StyleSheet.create({
    button: {
      width: width - 20,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 50,
      // Shadow properties for both Android and iOS
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 1.84,
      elevation: 5, // Only for Android
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonBackgroundColor}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const {width} = Dimensions.get('screen');
