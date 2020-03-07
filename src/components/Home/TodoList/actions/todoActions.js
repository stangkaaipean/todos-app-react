import * as types from '../constants';
import { API_URL } from '../../../../utils/configConstants';

export const fetchTodosStart = () => ({
  type: types.FETCH_TODOS_START
});

export const fetchTodosError = (error) => ({
  type: types.FETCH_TODOS_ERROR,
  error
});

export const fetchTodosSuccess = (todos) => ({
  type: types.FETCH_TODOS_SUCCESS,
  payload: { todos }
});

export const fetchTodos = () => dispatch => {
  dispatch(fetchTodosStart());

  fetch(`${API_URL}/todos`)
    .then((response) => response.json())
    .then((body) => dispatch(fetchTodosSuccess(body)))
    .catch((error) => dispatch(fetchTodosError(error)));
}

export const addTodoStart = () => ({
  type: types.ADD_TODO_START
});

export const addTodoError = (error) => ({
  type: types.ADD_TODO_ERROR,
  error
});

export const addTodoSuccess = (todo) => ({
  type:types.ADD_TODO_SUCCESS,
  payload: {
    todo
  }
});

export const addTodo = (task) => dispatch => {
  dispatch(addTodoStart());

  fetch(`${API_URL}/todos`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      task,
      done: false,
    })
  })
    .then((response) => response.json())
    .then((body) => dispatch(addTodoSuccess(body)))
    .catch((error) => dispatch(addTodoError(error)));
}

export const deleteTodoStart = () => ({
  type: types.DELETE_TODO_START,
});

export const deleteTodoError = (error) => ({
  type: types.DELETE_TODO_ERROR,
  error
});

export const deleteTodoSuccess = (id) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload: {
    id
  }
});

export const deleteTodo = (id) => dispatch => {
  dispatch(deleteTodoStart());

  fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE',
  })
    .then((response) => dispatch(deleteTodoSuccess(id)))
    .catch((error) => dispatch(deleteTodoError(error)));
}

export const setTodoDoneStart = () => ({
  type: types.SET_TODO_DONE_START
})

export const setTodoDoneError = (error) => ({
  type: types.SET_TODO_DONE_ERROR,
  error
});

export const setTodoDoneSuccess = (id, done) => ({
  type: types.SET_TODO_DONE_SUCCESS,
  payload: {
    id,
    done
  }
})

// Changed from id: Number into todo: Object to use PUT /todos/:id, avoid creating custom api routes
export const setTodoDone = (todo, done) => dispatch => {
  dispatch(setTodoDoneStart());

  fetch(`${API_URL}/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...todo, done })
  })
    .then((response) => dispatch(setTodoDoneSuccess(todo.id, done)))
    .catch((error) => dispatch(setTodoDoneError(error)));
}

