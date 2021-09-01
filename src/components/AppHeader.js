import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

function AppHeader(props) {
  const [newTitleValue, setNewTitleValue] = useState("");
  const onKeyPress = (e) => {
    if(e.key === "Enter" && newTitleValue.trim() ) {
        props.addTodo(newTitleValue);
        setNewTitleValue("");
    }
  }
  return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTitleValue}
          onChange={(e) => setNewTitleValue(e.target.value)}
          onKeyPress={onKeyPress}
        />
      </header>
  );
}

export default connect(
  (state) => ({
    todos: state.todos,
  }),
  { addTodo }
)(AppHeader);
