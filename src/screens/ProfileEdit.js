import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import CustomTextInput from '../components/CustomTextInput';
import CustomTouchableButton from '../components/CustomTouchableButton';

export default function ProfileEdit({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  return (
    <ScrollView style={{backgroundColor: isDarkMode ? '#000' : 'white'}}>
      <SafeAreaView>
        <View style={[styles.container]}>
          <HeaderComponent
            headerTitle="Edit Profile"
            headerSubTitle="Edit your profile information"
          />

          <View style={styles.screenContentMain}>
            <View style={styles.editFormMain}>
              <CustomTextInput
                placeholder="Name"
                name="name"
                onChangeText={text => setName(text)}
              />

              <CustomTextInput
                placeholder="Email"
                name="email"
                onChangeText={text => setEmail(text)}
              />

              <CustomTextInput
                placeholder="Mobile Number"
                name="mobile"
                onChangeText={text => setMobile(text)}
              />

              <CustomTextInput
                placeholder="Address"
                name="address"
                onChangeText={text => setAddress(text)}
              />

              <CustomTouchableButton
                title="Save"
                onPress={() => navigation.navigate('Profile')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    width: width - 20,
    height: 50,
    borderWidth: 1,
    borderColor: '#EB1C3C',
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  button: {
    width: width - 20,
    margin: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
    // Use dynamic backgroundColor based on dark mode
    backgroundColor: '#EB1C3C',
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
});
