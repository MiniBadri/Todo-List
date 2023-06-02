import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ todos, buttonHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (usrInput) => {
    console.log(usrInput);
    setText(usrInput);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='New Todo..'
        onChangeText={changeHandler}
      />
      <View style={[{ width: '30%', marginLeft: 250 }]}>
        <Button
          style={styles.button}
          onPress={() => buttonHandler(text)}
          title='Add Todo'
          color='green'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    marginRight: 18,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,

    borderBottomColor: 'lightgrey',
  },
  button: {
    marginRight: 20,
  },
});
