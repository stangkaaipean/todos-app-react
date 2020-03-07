import * as types from '../constants';


export const setTodoDone = (id, done) => ({
  type: types.SET_TODO_DONE,
  payload: {
    id,
    done
  }
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  payload: {
    id
  }
});

export const addTodo = (task) => ({
  type: types.ADD_TODO,
  payload: {
    task
  }
});