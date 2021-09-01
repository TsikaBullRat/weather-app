import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Weather, styles } from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Weather/>
    </View>
  );
}
