import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const ButtonRow = ({ buttons, onPress }) => (
  <View style={styles.row}>
    {buttons.map((label) => (
      <Button
        label={label}
        onPress={onPress}
        key={label}
        isEqual={label === '='}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default ButtonRow;