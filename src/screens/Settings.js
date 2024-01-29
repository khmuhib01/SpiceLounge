import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {key: '1', label: 'About'},
  {key: '2', label: 'About'},
  {key: '3', label: 'About'},
  {key: '4', label: 'About'},
];

export default function Settings() {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.column} onPress={() => {}}>
      <Icon name="home" size={32}></Icon>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          numColumns={2} // Set the number of columns
          contentContainerStyle={styles.row}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between', // Distribute columns equally
    margin: 8,
  },
  column: {
    flex: 1, // Equal flex for both columns
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#ccc', // Add a border for better visualization
    borderRadius: 8,
    margin: 8, // Adjust margin as needed
  },
});
