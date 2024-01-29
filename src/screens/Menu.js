import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingListComponent from '../components/SettingListComponent';
import HeaderComponent from '../components/HeaderComponent';
import {useTheme} from '../provider/ThemeProvider';

export default function Menu({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();

  const {width} = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'start',
    },

    header: {
      backgroundColor: '#EB1C3C',
      height: 200,
      width: '100%',
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
    },

    headerContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    mid: {
      paddingVertical: 20,
      width: width - 20,
      display: 'flex',
      gap: 10,
    },

    cartList: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      backgroundColor: 'white',
      gap: 20,
      padding: 10,
    },
  });

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? theme.background : theme.background},
      ]}>
      <View style={styles.header}>
        <HeaderComponent
          headerTitle="Menus"
          headerSubTitle="Browse your menu"
        />
      </View>
      <ScrollView>
        <View style={styles.mid}>
          <SettingListComponent
            iconName="shopping-cart"
            text="Order History"
            onPress={() => {
              navigation.navigate('OrderHistory');
            }}
          />
          {/* <SettingListComponent
            iconName="user"
            text="Profile"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          /> */}
          <SettingListComponent
            iconName="book"
            text="About Us"
            onPress={() => {
              navigation.navigate('About');
            }}
          />
          <SettingListComponent
            iconName="exclamation"
            text="Terms and Conditions"
            onPress={() => {
              navigation.navigate('Terms');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
