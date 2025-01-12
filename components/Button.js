import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, onPress, isEqual }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isEqual && styles.equalButton,
        isPressed && styles.pressedButton,
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => onPress(label)}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  equalButton: {
    backgroundColor: '#FF8C00', 
  },
  pressedButton: {
    backgroundColor: '#555',
  },
});

export default Button;