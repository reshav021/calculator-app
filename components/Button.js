import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, onPress, isEqual }) => (
  <TouchableOpacity
    style={[styles.button, isEqual && styles.equalButton]}
    onPress={() => onPress(label)}
  >
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 50, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  equalButton: {
    backgroundColor: '#FF8C00', 
  },
});

export default Button;