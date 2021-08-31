import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleTodo, remooveTodo, editTodo} from "../store/actions";

function Todo(props) {
  const [titleValue, setTitleValue] = useState(props.todo.title);
  return (
    <li
      className={ props.todo.completed ? "completed" : "" }
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={ props.todo.completed }
          onChange={ (e) => props.toggleTodo(props.todo.id) }
        />
        <input
          className="todo"
          type="text"
          value={ titleValue }
          onChange={ (e) => setTitleValue( e.target.value) }
          onBlur={ () => props.editTodo({id: props.todo.id, title: titleValue}) }
        />
        <button className="destroy" onClick={ (e) => props.remooveTodo(props.todo.id) } />
      </div>
    </li>
  );
}

export default connect(
  null,
  { toggleTodo, remooveTodo, editTodo}
)(Todo);
