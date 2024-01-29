import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../provider/ThemeProvider';

export default function Cart() {
  const theme = useTheme();
  return (
    <View>
      <Text style={{fontSize: 20, color: theme.text}}>Cart</Text>
    </View>
  );
}
