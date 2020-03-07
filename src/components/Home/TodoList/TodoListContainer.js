import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { setTodoDone, deleteTodo, addTodo } from './actions/todoActions';

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
  }); 

const mapDispatchToProps = dispatch => bindActionCreators({
    setTodoDone,
    deleteTodo,
    addTodo
  }, dispatch)
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoList);