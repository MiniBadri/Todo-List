import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodoItem({ item, pressHandler }) {
  return (
    <View style={styles.cardContainer}>
      <Icon
        name='trash'
        size={18}
        color='grey'
        onPress={() => pressHandler(item.key)}
      />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 16,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    borderBottomColor: 'black',
    marginRight: 20,
  },
  text: {
    marginLeft: 10,
  },
});
