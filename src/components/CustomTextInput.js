import React from 'react';
import {TextInput, StyleSheet, Dimensions, useColorScheme} from 'react-native';

export default function CustomTextInput({
  placeholder,
  name,
  value,
  onChangeText,
}) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TextInput
      style={[
        styles.input,
        {
          color: isDarkMode ? '#fff' : '#000',
          borderColor: isDarkMode ? '#555' : '#EB1C3C', // Adjust border color based on dark mode
        },
      ]}
      placeholder={placeholder}
      placeholderTextColor={isDarkMode ? '#fff' : '#333'} // Set placeholder text color based on dark mode
      name={name}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    width: width - 20,
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
});
