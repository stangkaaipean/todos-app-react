import { combineReducers } from 'redux';
import todoReducer from './components/Home/TodoList/reducers/TodoReducers'

const appReducer = combineReducers({
    todoReducer
});

export default appReducer;