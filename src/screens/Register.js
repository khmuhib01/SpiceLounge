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
import {useTheme} from '../provider/ThemeProvider';
// import {SafeAreaView} from 'react-native-safe-area-context';

export default function Register({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigationHook = useNavigation(navigation);

  const {width} = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? theme.background : theme.background,
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
      borderColor: isDarkMode ? theme.borderColor : theme.borderColor,
      paddingHorizontal: 20,
      borderRadius: 50,
    },
  });

  //   const handleSubmit = () => {
  //     navigationHook.navigate('Home', {
  //       phone: phone,
  //       password: password,
  //     });
  //   };

  //   console.log(theme);
  const handleLogin = () => {
    navigation.navigate('BottomNavigator');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: theme.fontSize.large,
            fontWeight: 'bold',
            textAlign: 'center',
            color: isDarkMode ? theme.text : theme.text,
          }}>
          Login your account
        </Text>
        <View style={styles.screenContentMain}>
          <View style={styles.editFormMain}>
            <CustomTextInput
              placeholder="Email"
              name="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <CustomTextInput
              placeholder="Password"
              name="password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <CustomTouchableButton onPress={handleLogin} title="Login" />

            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: isDarkMode ? '#fff' : '#000',
                }}
                onPress={() => navigation.navigate('ForgotPassword')}>
                Forgot Password ?
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: isDarkMode ? '#fff' : '#000',
                }}>
                Don't have an account ?{' '}
                <Text
                  style={{fontWeight: 'bold', color: theme.primary}}
                  onPress={() => navigation.navigate('Register')}>
                  Register
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
