import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/styles/index.scss';
import TodoList from './TodoList/TodoListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="app-header">
          <h2>ToDo App</h2>
        </div>
        <div className="main-content">
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
