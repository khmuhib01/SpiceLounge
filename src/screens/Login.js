import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Button,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../components/CustomTextInput';
import CustomTouchableButton from '../components/CustomTouchableButton';
// import {SafeAreaView} from 'react-native-safe-area-context';

export default function Login({navigation}) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigationHook = useNavigation(navigation);

  //   const handleSubmit = () => {
  //     navigationHook.navigate('Home', {
  //       phone: phone,
  //       password: password,
  //     });
  //   };

  const handleLogin = () => {
    navigation.navigate('BottomNavigator');
  };

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            color: isDarkMode ? '#fff' : '#000',
          }}>
          Login your account
        </Text>
        <View style={styles.screenContentMain}>
          <View style={styles.editFormMain}>
            <CustomTextInput
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <CustomTextInput
              placeholder="Password"
              name="password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <CustomTouchableButton onPress={handleLogin} title="Login" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  darkContainer: {
    backgroundColor: '#000',
  },

  screenContentMain: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  editFormMain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 20,
  },

  input: {
    // width: width - 40,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: '#EB1C3C',
    paddingHorizontal: 20,
    borderRadius: 50,
  },
});
