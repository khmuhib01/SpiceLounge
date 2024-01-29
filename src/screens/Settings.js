import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Settings() {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text>Settings</Text>
      </View>

      <View style={styles.spacing} />

      <View style={styles.column}>
        <Text>Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute columns equally
    margin: 8,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc', // Add a border for better visualization
    borderRadius: 8,
  },
  spacing: {
    width: 16,
  },
});
