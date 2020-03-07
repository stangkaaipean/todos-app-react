import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/index.scss'


const Todo = ({ todo, setDone, deleteTodo }) => (
  <li style={{ textDecoration: (todo.done ? "line-through" : "") }}>
    {todo.task}&nbsp;
    <button className="done-button" onClick={() => setDone(todo, !todo.done)}>{todo.done ? "Activate" : "Set Done"}</button>&nbsp;
    <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired,
  setDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todo;