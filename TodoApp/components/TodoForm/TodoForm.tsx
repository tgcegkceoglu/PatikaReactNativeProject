import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState } from 'react';
import styles from './TodoForm.styles';

function TodoForm({handleSaveTodoList}:{handleSaveTodoList:(text: string) => void}) {
  const [todo,setTodo] = useState('');

  function handleSaveTodo(){
    handleSaveTodoList(todo);
    setTodo('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        cursorColor={'white'}
        placeholder="Yapılacak..."
        placeholderTextColor="#717475"
        value={todo}
        onChangeText={setTodo}
      />
      <TouchableOpacity style={todo.length === 0 ? styles.buttonDisabled : styles.button } onPress={handleSaveTodo} disabled={todo.length === 0} >
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoForm;
