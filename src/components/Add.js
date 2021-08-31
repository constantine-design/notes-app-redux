import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        newTitleValue: ""
    }
  }

  onKeyPress = (e) => {
    if(e.key === "Enter") {
        this.props.addTodo(this.state.newTitleValue);
        this.setState({newTitleValue: ""});
    }
  }

  render() {
    return (
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={this.state.newTitleValue}
            onChange={(e) => this.setState({newTitleValue: e.target.value})}
            onKeyPress={this.onKeyPress}
          />
        </header>
    );
  }
}

export default connect(
  (state) => ({
    todos: state.todos,
  }),
  { addTodo }
)(Add);
