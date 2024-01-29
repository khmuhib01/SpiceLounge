import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '../provider/ThemeProvider';

export default function SettingListComponent({iconName, text, onPress}) {
  const darkMode = useColorScheme() === 'dark';

  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.cartList,
        {backgroundColor: darkMode ? theme.primary : theme.primary},
      ]}
      onPress={onPress}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: darkMode ? theme.primary : theme.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name={iconName}
          size={30}
          color={darkMode ? theme.iconColor : '#ffffff'}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: darkMode ? theme.appBarText : theme.appBarText,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 20,
    padding: 10,
    borderRadius: 10,
    shadowRadius: 4,
  },
});
