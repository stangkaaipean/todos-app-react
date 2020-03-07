import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { setTodoDone, deleteTodo, addTodo, fetchTodos } from './actions/todoActions';
import React from 'react';

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
  }); 


class TodoListContainer extends React.Component {

    componentDidMount() {
      this.props.fetchTodos();
    }
  
    render() {
      return <TodoList {...this.props} />
    }
  
  }

const mapDispatchToProps = dispatch => bindActionCreators({
    setTodoDone,
    deleteTodo,
    addTodo,
    fetchTodos,
  }, dispatch)
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);