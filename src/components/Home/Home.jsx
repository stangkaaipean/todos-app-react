import React from 'react';
import './assets/styles/index.scss';
import TodoList from './TodoList/TodoListContainer';


function App() {
  return (
    <div className="app">
        <div className="app-header">
          <h2>ToDo App</h2>
        </div>
        <div className="main-content">
          <TodoList />
        </div>
    </div>
  );
}

export default App;
