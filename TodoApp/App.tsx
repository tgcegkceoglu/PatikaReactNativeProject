import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TodoForm from './components/TodoForm';

type TodoListType = {
  id:number;
  text: string;
  isDone: boolean;
};

function App() {
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const activeTodosCount = todoList.filter(todo => !todo.isDone).length;

  const renderItem = ({item}: {item: TodoListType}) => (
    <TouchableOpacity
      disabled={item.isDone}
      onPress={() => handleDoneTodo(item)}
      style={[styles.todo_container,item.isDone ? styles.inactive_todo_container : styles.active_todo_container]}
      >
      <Text style={[styles.todo_item,item.isDone && styles.inactive_todo_item]}>{item.text}</Text>
    </TouchableOpacity>
  );

  function handleDoneTodo(item: TodoListType) {
    const list = [...todoList];
    const index = list.findIndex(todo => todo.id === item.id);
    list[index].isDone = !list[index].isDone;
    setTodoList(list);
  }

  function handleSaveTodoList(text: string) {
    setTodoList([...todoList, {text: text, isDone: false,id:todoList.length}]);
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}> {activeTodosCount} </Text>
      </View>

      <View style={styles.todolist_container}>
        <FlatList
          data={todoList}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>

      <TodoForm handleSaveTodoList={handleSaveTodoList} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#102027',
  },
  inner_container: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  todolist_container: {
    flex: 1,
  },
  title: {
    flex: 1,
    color: '#ffa500',
    fontSize: 25,
    fontWeight: 'bold',
  },

  counter: {
    color: '#ffa500',
    fontSize: 25,
    fontWeight: 'bold',
  },

  todo_item: {
    fontSize: 15,
    color: 'white',
  },
  inactive_todo_item:{
    textDecorationLine:'line-through',
    textDecorationStyle: 'solid',
  },
  todo_container:{
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  active_todo_container: {
    backgroundColor: '#7da453',

  },
  inactive_todo_container: {
    backgroundColor: 'grey',
  },
});
