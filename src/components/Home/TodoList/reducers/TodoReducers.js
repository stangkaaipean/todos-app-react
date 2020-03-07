import { Record } from 'immutable';
import * as types from '../constants';

const TodoState = new Record({
  todos: []
});

const initialState = new TodoState();

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_TODO_DONE_SUCCESS:
      return state.set('todos', state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, done: action.payload.done } : todo));
    case types.DELETE_TODO_SUCCESS:
      return state.set('todos', state.todos.filter((todo) => todo.id !== action.payload.id));
    case types.ADD_TODO_SUCCESS:
      return state.set('todos', [...state.todos, action.payload.todo]);
    case types.FETCH_TODOS_SUCCESS:
      return state.set('todos', [...action.payload.todos]);
      default:
      return state;
  }
}

export default todoReducer;