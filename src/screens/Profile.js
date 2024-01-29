import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomTouchableButton from '../components/CustomTouchableButton';
import HeaderComponent from '../components/HeaderComponent';

export default function Profile({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView
      style={{backgroundColor: isDarkMode ? '#000' : '#fff', flex: 1}}>
      <SafeAreaView>
        <View
          style={[
            styles.container,
            {backgroundColor: isDarkMode ? '#000' : '#fff'},
          ]}>
          <HeaderComponent
            headerTitle="Profile"
            headerSubTitle="Your profile information"
            textColor={isDarkMode ? '#fff' : '#000'}
          />

          <View style={styles.screenContentMain}>
            <Image
              source={require('../assets/profile.jpg')}
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                marginTop: -60,
              }}
            />

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                <Icon
                  name={'edit'}
                  size={25}
                  color="#EB1C3C"
                  onPress={() => navigation.navigate('ProfileEdit')}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: isDarkMode ? '#fff' : '#000',
                  }}>
                  John Doe
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: isDarkMode ? '#fff' : '#000',
                  }}>
                  Hi there Emilia!
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.profileInfoCard,
                {
                  backgroundColor: isDarkMode ? '#222' : 'white',
                },
              ]}>
              <View style={styles.infoRow}>
                <Text
                  style={[
                    styles.labelText,
                    {color: isDarkMode ? '#fff' : '#000'},
                  ]}>
                  Name:
                </Text>
                <Text
                  style={[
                    styles.infoText,
                    {color: isDarkMode ? '#fff' : '#000'},
                  ]}>
                  John Doe
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text
                  style={[
                    styles.labelText,
                    {color: isDarkMode ? '#fff' : '#000'},
                  ]}>
                  Email:
                </Text>
                <Text
                  style={[
                    styles.infoText,
                    {color: isDarkMode ? '#fff' : '#000'},
                  ]}>
                  john@gmail.com
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text
                  style={[
                    styles.labelText,
                    {color: isDarkMode ? '#fff' : '#000'},
                  ]}>
                  Phone:
                </Text>
                <Text
                  style={[
                    styles.infoText,
                    {color: isDarkMode ? '#fff' : '#000'},
                  ]}>
                  +44075454855
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text
                  style={[
                    styles.labelText,
                    {color: isDarkMode ? '#fff' : '#000'},
                  ]}>
                  Address:
                </Text>
                <Text
                  style={[
                    styles.infoText,
                    {
                      color: isDarkMode ? '#fff' : '#000',
                      flex: 1,
                      flexWrap: 'wrap',
                    },
                  ]}>
                  WA16 1YW WA16
                </Text>
              </View>
            </View>

            <CustomTouchableButton
              onPress={() => navigation.navigate('Login')}
              title="Logout"
            />
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
    gap: 20,
    margin: '-10px',
  },

  profileInfoCard: {
    backgroundColor: 'white',
    width: width - 20,
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingVertical: 20,
  },

  infoRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  labelText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },

  infoText: {
    textAlign: 'right',
    fontWeight: 'normal',
    fontSize: 20,
  },

  button: {
    width: width - 20,
    margin: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
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
