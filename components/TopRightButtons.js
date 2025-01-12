import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TopRightButtons = ({ onToggleAdvanced, onShowConversions }) => (
  <View style={styles.topRightButtons}>
    <TouchableOpacity
      style={styles.modeButton}
      onPress={onToggleAdvanced}
    >
      <Icon name="cube" size={20} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.modeButton}
      onPress={onShowConversions}
    >
      <Icon name="exchange" size={20} color="#fff" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  topRightButtons: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modeButton: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
});

export default TopRightButtons;