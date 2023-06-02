import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> My Todo </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 29,
    backgroundColor: 'coral',
    marginEnd: 22, //cut off in the end
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
