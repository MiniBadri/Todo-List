import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Header from './components/Header';

import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Alert,
} from 'react-native';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy Coffee', key: 1 },
    { text: 'go to bank', key: 2 },
    { text: 'grocery shopping', key: 3 },
  ]);

  const deleteItem = (key) => {
    setTodos((prevItem) => prevItem.filter((todo) => todo.key != key));
  };

  const addItem = (text) => {
    if (text.length > 3) {
      setTodos([{ text: text, key: todos.length + 1 }, ...todos]);
    } else {
      Alert.alert('OOPS!', 'Todo items must be 4 characters long', [
        { text: 'Ok! Got it.', onPress: () => console.log('alert closed') },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View styles={styles.content}>
          <AddTodo item={todos} buttonHandler={addItem} />
          <View styles={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={deleteItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingLeft: 20,
  },
  content: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
