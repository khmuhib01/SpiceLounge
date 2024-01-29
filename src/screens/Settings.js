import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '../provider/ThemeProvider';

const data = [
  {key: '1', label: 'About'},
  {key: '2', label: 'About'},
  {key: '3', label: 'About'},
  {key: '4', label: 'About'},
];

export default function Settings() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.column} onPress={() => {}}>
      <Icon
        name="home"
        size={32}
        color={isDarkMode ? theme.text : theme.text}></Icon>
      <Text
        style={{
          fontSize: theme.fontSize.normal,
          fontWeight: 'bold',
          color: isDarkMode ? theme.text : theme.text,
        }}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? theme.background : theme.background,
    },

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
      borderColor: isDarkMode ? theme.borderColor : theme.borderColor, // Add a border for better visualization
      borderRadius: 8,
      margin: 8, // Adjust margin as needed
    },
  });

  return (
    <ScrollView style={styles.container}>
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
