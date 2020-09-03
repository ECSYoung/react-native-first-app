import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputTest, setOutputTest] = useState('Open up App.js to start working on your app!');

  return (
    <View style={styles.container}>
      <Text>{outputTest}</Text>
      <Button title= "Change Text" onPress={() => setOutputTest('The Text Has Changed!')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
