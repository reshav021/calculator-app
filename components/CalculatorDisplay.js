import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CalculatorDisplay = ({ input }) => (
  <View style={styles.top}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Text style={styles.input}>{input}</Text>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  top: {
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    margin: 10,
  },
  input: {
    fontSize: 28,
    color: '#fff',
    minWidth: '100%',
  },
});

export default CalculatorDisplay;