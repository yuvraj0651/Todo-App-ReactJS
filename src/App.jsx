import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todo Form/TodoForm';
import TodoList from './components/Todo List/TodoList';
import { TodoData } from './components/TodoData';

function App() {
  const [todoData, setTodoData] = useState(TodoData);
  const [editTodo, setEditTodo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Select Status");

  const filteredTodos = selectedCategory === "Select Status"
    ? todoData
    : todoData.filter((todo) => todo.status === selectedCategory);

  return (
    <>
      <div className="Todo-form__wrapper">
        <TodoForm todoFormData={todoData}
          setTodoData={setTodoData}
          editTodo={editTodo}
          setEditTodo={setEditTodo} />

        <TodoList
          todoDataList={filteredTodos}
          onDataDelete={setTodoData}
          setEditTodo={setEditTodo}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </>
  )
}

export default App
