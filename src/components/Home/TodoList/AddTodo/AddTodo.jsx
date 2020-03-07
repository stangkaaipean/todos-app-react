import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddTodo extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      task: ''
    };

    this.changeTaskText = this.changeTaskText.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  changeTaskText(e) {
    e.preventDefault();  // optional, not necessary in this case, but for consistency

    this.setState({ task: e.target.value });
  }

  submitTask(e) {
    e.preventDefault();  // optional, not necessary in this case, but for consistency

    this.setState({ task: '' });
    this.props.addTodo(this.state.task);
  }

  render() {
    return (
    <div>
      <input type="text" onChange={this.changeTaskText} value={this.state.task} placeholder="Task text" />
      <button onClick={this.submitTask}>Add Todo</button>
    </div>
    );
  }
}

export default AddTodo;