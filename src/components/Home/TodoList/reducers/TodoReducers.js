import { Record } from 'immutable';
import * as types from '../constants';

import { getLastId } from '../../../../utils/todoUtils';


const TodoState = new Record({
  todos: [
    { id: 1, task: "This is todo 1", done: false },
    { id: 2, task: "This is todo 2", done: false },
    { id: 3, task: "This is todo 3", done: true }
  ]
});

const initialState = new TodoState();

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_TODO_DONE:
      return state.set('todos', state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, done: action.payload.done } : todo));
    case types.DELETE_TODO:
      return state.set('todos', state.todos.filter((todo) => todo.id !== action.payload.id));
    case types.ADD_TODO:
      return state.set('todos', [ ...state.todos, { id: getLastId(state.todos) + 1, task: action.payload.task, done: false } ]);
    default:
      return state;
  }
}

export default todoReducer;