import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalculatorDisplay = ({ input }) => (
  <View style={styles.top}>
    <Text style={styles.input}>{input}</Text>
  </View>
);

const styles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    fontSize: 28,
    color: '#fff',
  },
});

export default CalculatorDisplay;