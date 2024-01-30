import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import ScrollableTabString from 'react-native-scrollable-tabstring';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Overlay} from '@rneui/themed';

const tabNames = [
  {
    title: 'Tab 1',
    index: 0,
    isParent: true,
  },
  {
    title: 'Tab 2',
    index: 1,
    isParent: true,
  },
  {
    title: 'Tab 3',
    index: 2,
    isParent: true,
  },
  {
    title: 'Tab 4',
    index: 3,
    isParent: true,
  },
  {
    title: 'Tab 5',
    index: 4,
    isParent: true,
  },
  {
    title: 'Tab 6',
    index: 5,
    isParent: true,
  },
];

const dataSections = [
  {
    name: 'Section 1',
    index: 0,
    data: [
      {
        id: '0',
        name: 'Section 1 - 1',
      },
      {
        id: '1',
        name: 'Section 1 - 2',
      },
      {
        id: '2',
        name: 'Section 1 - 3',
      },
      {
        id: '3',
        name: 'Section 1 - 4',
      },
      {
        id: '4',
        name: 'Section 1 - 5',
      },
    ],
  },
  {
    name: 'Section 2',
    index: 0,
    data: [
      {
        id: '5',
        name: 'Section 2 - 1',
      },
      {
        id: '6',
        name: 'Section 2 - 2',
      },
      {
        id: '7',
        name: 'Section 2 - 3',
      },
      {
        id: '8',
        name: 'Section 2 - 4',
      },
      {
        id: '9',
        name: 'Section 2 - 5',
      },
    ],
  },
  {
    name: 'Section 3',
    index: 1,
    data: [
      {
        id: '10',
        name: 'Section 3 - 1',
      },
      {
        id: '11',
        name: 'Section 3 - 2',
      },
      {
        id: '12',
        name: 'Section 3 - 3',
      },
      {
        id: '13',
        name: 'Section 3 - 4',
      },
      {
        id: '14',
        name: 'Section 3 - 5',
      },
    ],
  },
  {
    name: 'Section 4',
    index: 1,
    data: [
      {
        id: '15',
        name: 'Section 4 - 1',
      },
      {
        id: '16',
        name: 'Section 4 - 2',
      },
      {
        id: '17',
        name: 'Section 4 - 3',
      },
      {
        id: '18',
        name: 'Section 4 - 4',
      },
      {
        id: '19',
        name: 'Section 4 - 5',
      },
    ],
  },
  {
    name: 'Section 5',
    index: 2,
    data: [
      {
        id: '20',
        name: 'Section 5 - 1',
      },
      {
        id: '21',
        name: 'Section 5 - 2',
      },
      {
        id: '22',
        name: 'Section 5 - 3',
      },
      {
        id: '23',
        name: 'Section 5 - 4',
      },
      {
        id: '24',
        name: 'Section 5 - 5',
      },
    ],
  },
  {
    name: 'Section 6',
    index: 2,
    data: [
      {
        id: '25',
        name: 'Section 6 - 1',
      },
      {
        id: '26',
        name: 'Section 6 - 2',
      },
      {
        id: '27',
        name: 'Section 6 - 3',
      },
      {
        id: '28',
        name: 'Section 6 - 4',
      },
      {
        id: '29',
        name: 'Section 6 - 5',
      },
    ],
  },
  {
    name: 'Section 7',
    index: 3,
    data: [
      {
        id: '30',
        name: 'Section 7 - 1',
      },
      {
        id: '31',
        name: 'Section 7 - 2',
      },
      {
        id: '32',
        name: 'Section 7 - 3',
      },
      {
        id: '33',
        name: 'Section 7 - 4',
      },
      {
        id: '34',
        name: 'Section 7 - 5',
      },
    ],
  },
  {
    name: 'Section 8',
    index: 4,
    data: [
      {
        id: '35',
        name: 'Section 8 - 1',
      },
      {
        id: '36',
        name: 'Section 8 - 2',
      },
      {
        id: '37',
        name: 'Section 8 - 3',
      },
      {
        id: '38',
        name: 'Section 8 - 4',
      },
      {
        id: '39',
        name: 'Section 8 - 5',
      },
    ],
  },
];

export default function Home({navigation}) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerImage}>
              <Image
                source={require('../assets/profile.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  // borderRadius: 5,
                }}
              />
            </View>
            <View style={styles.headerInfo}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  height: '100%',
                }}>
                <View>
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                    British Indian Restaurant
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                  <Icon name="home" size={12} color="brown" />
                  <Text style={{fontSize: 12}}>Indian</Text>
                </View>
                <View
                  style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                  <Icon name="home" size={12} color="brown" />
                  <Text style={{fontSize: 12}}>40 mins</Text>
                  <Icon name="home" size={12} color="brown" />
                  <Text style={{fontSize: 12}}>60 mins</Text>
                </View>
                <View
                  style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                  <Icon name="home" size={12} color="brown" />
                  <Text style={{fontSize: 12}}>XXXXXXXXXXX</Text>
                  <Icon name="home" size={12} color="brown" />
                  <Text style={{fontSize: 12}}>XXXXXXXXXXX</Text>
                </View>
              </View>
            </View>
            <View style={styles.headerButton}>
              <View style={styles.preOrderButton}>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'white',
                    backgroundColor: 'brown',
                    padding: 5,
                    borderRadius: 100,
                    textAlign: 'center',
                    width: 70,
                  }}>
                  Pre Order
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tabsButtons}>
          <Text
            onPress={() => navigation.navigate('Info')}
            style={{
              fontSize: 12,
              color: 'white',
              backgroundColor: 'brown',
              padding: 5,
              borderRadius: 100,
              textAlign: 'center',
              width: 70,
            }}>
            Info
          </Text>
          <Text
            onPress={() => navigation.navigate('Review')}
            style={{
              fontSize: 12,
              color: 'white',
              backgroundColor: 'brown',
              padding: 5,
              borderRadius: 100,
              textAlign: 'center',
              width: 70,
            }}>
            Review
          </Text>
          <Text
            onPress={toggleOverlay}
            style={{
              fontSize: 12,
              color: 'white',
              backgroundColor: 'brown',
              padding: 5,
              borderRadius: 100,
              textAlign: 'center',
              width: 70,
            }}>
            Offer
          </Text>
        </View>
        <View style={styles.scrollable}>
          <ScrollableTabString
            dataTabs={tabNames}
            dataSections={dataSections}
            renderSection={item => (
              <View>
                <Text>{item.name}</Text>
                {item.data.map(i => (
                  <Text key={i.id} style={{padding: 20}}>
                    {i.name}
                  </Text>
                ))}
              </View>
            )}
            renderTabName={item => (
              <TouchableOpacity>
                <Text style={{padding: 10, fontWeight: 'bold'}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
            selectedTabStyle={{
              borderColor: Colors.brown_grey,
              borderRadius: 10,
              borderWidth: 1,
              margin: 10,
            }}
            unselectedTabStyle={{
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            tabStyle={{
              borderColor: Colors.brown_grey,
              borderRadius: 10,
              borderWidth: 1,
              margin: 10,
            }}
          />
        </View>
        <View style={styles.cart}>
          <View>
            <Text style={{color: 'white'}}>Sub Total: $6.65</Text>
            <Text style={{color: 'white'}}>Total: $6.65</Text>
          </View>
          <View>
            <Text
              style={{color: 'white'}}
              onPress={() => navigation.navigate('Cart')}>
              Go to cart
            </Text>
          </View>
        </View>
      </View>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Hello!</Text>
        <Text style={styles.textSecondary}>
          Welcome to React Native Elements
        </Text>
        <Button
          icon={
            <Icon
              name="wrench"
              type="font-awesome"
              color="white"
              size={25}
              iconStyle={{marginRight: 10}}
            />
          }
          title="Start Building"
          onPress={toggleOverlay}
        />
      </Overlay>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 10,
    padding: 10,
  },

  header: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
    // flex: 1,
    height: 90,
    padding: 10,
  },

  scrollable: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  cart: {
    // flex: 1,
    height: 50,
    backgroundColor: 'brown',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerContent: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },

  headerImage: {
    // flex: 2,
    width: 85,
    backgroundColor: 'green',
  },

  headerInfo: {
    flex: 1,
    // backgroundColor: 'red',
  },

  headerButton: {
    // flex: 1,
    width: 70,
    // backgroundColor: 'blue',
  },

  preOrderButton: {
    flex: 1,
    alignItems: 'flex-end',
  },

  tabsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 5,
  },

  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});
