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
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [email, setEmail] = useState('');

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
      <ScrollView>
        <View>
          <View style={styles.screenContentMain}>
            <View style={styles.editFormMain}>
              <CustomTextInput
                placeholder="First name"
                name="fname"
                value={fname}
                onChangeText={text => setFname(text)}
              />
              <CustomTextInput
                placeholder="Last name"
                name="lname"
                value={lname}
                onChangeText={text => setLname(text)}
              />
              <CustomTextInput
                placeholder="Email"
                name="email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <CustomTextInput
                placeholder="Mobile number"
                name="mobileNumber"
                value={mobileNumber}
                onChangeText={text => setMobileNumber(text)}
              />
              <CustomTextInput
                placeholder="Password"
                name="password"
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <CustomTextInput
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
              />
              <CustomTouchableButton onPress={handleLogin} title="Register" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
