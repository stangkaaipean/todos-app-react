import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/index.scss'


const Todo = ({ todo, setDone, deleteTodo }) => (
  <li>
    <p style={{ textDecoration: (todo.done ? "line-through" : "") }}>{todo.task}&nbsp;</p>
    <div>
      <button className="done-button btn-primary" onClick={() => setDone(todo, !todo.done)}>{todo.done ? "Activate" : "Set Done"}</button>&nbsp;
    <button className="delete-button btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
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