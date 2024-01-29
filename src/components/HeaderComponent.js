import {View, Text, StyleSheet, useColorScheme} from 'react-native'; // Import useColorScheme
import React from 'react';

export default function HeaderComponent({headerTitle, headerSubTitle}) {
  const isDarkMode = useColorScheme() === 'dark';
  const headerBackgroundColor = isDarkMode ? '#121212' : '#EB1C3C';
  const textColor = isDarkMode ? 'white' : 'white';

  return (
    <View style={[styles.header, {backgroundColor: headerBackgroundColor}]}>
      <View style={styles.headerContent}>
        <Text style={{fontSize: 30, color: textColor, fontWeight: 'bold'}}>
          {headerTitle}
        </Text>
        <Text style={{fontSize: 18, color: textColor, fontWeight: 'normal'}}>
          {headerSubTitle}
        </Text>
      </View>

      {/* Write here circle position code */}
      {/* ..... */}
      {/* ..... */}
      {/* ..... */}
      {/* ..... */}
      {/* Write here circle position code */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
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
});
