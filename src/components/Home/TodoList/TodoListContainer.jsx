import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { setTodoDone, deleteTodo, addTodo, fetchTodos, changeFilter} from './actions/todoActions';
import React from 'react';
import { getVisibleTodos } from './reducers/todoSelectors';

const mapStateToProps = state => ({
    todos: getVisibleTodos(state)
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
    changeFilter
  }, dispatch)
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);