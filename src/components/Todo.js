import React from "react";
import { connect } from "react-redux";
import { toggleTodo, remooveTodo, editTodo} from "../store/actions";

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      titleValue: this.props.todo.title
    }
  }

  render () {
    return (
      <li
        className={ this.props.todo.completed ? "completed" : "" }
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={ this.props.todo.completed }
            onChange={ (e) => this.props.toggleTodo(this.props.todo.id) }
          />
          <input
            className="todo"
            type="text"
            value={ this.state.titleValue }
            onChange={ (e) => this.setState({titleValue: e.target.value}) }
            onBlur={ () => this.props.editTodo({id: this.props.todo.id, title: this.state.titleValue}) }
          />
          <button className="destroy" onClick={ (e) => this.props.remooveTodo(this.props.todo.id) } />
        </div>
      </li>
    );
  }

}

export default connect(
  null,
  { toggleTodo, remooveTodo, editTodo}
)(Todo);
