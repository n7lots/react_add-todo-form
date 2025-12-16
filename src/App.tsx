import './App.scss';
import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { useState } from 'react';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';
import { TodoInfo } from './components/TodoInfo';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(todosFromServer);

  const addNewTodo = (title: string, userId: number) => {
    const newTodo: Todo = {
      id: Math.max(...todos.map(todo => todo.id)) + 1,
      title: title,
      userId: userId,
      completed: false,
    };

    setTodos(currentTodos => [...currentTodos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>
      <TodoInfo addTodo={addNewTodo} users={usersFromServer} />
      <TodoList todos={todos} users={usersFromServer} />
    </div>
  );
};
