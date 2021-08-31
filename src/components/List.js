import React from "react";
import Todo from "./Todo.js";
import { connect } from "react-redux";
import { makeAllTodo } from "../store/actions";

function List(props) {
  let filteredTodoes = props.todos;
  if ( props.show === "active") filteredTodoes = props.todos.filter ( (x) => x.completed === false );
  if ( props.show === "completed") filteredTodoes = props.todos.filter ( (x) => x.completed === true );
  const allTodosTrue = props.todos.every(todo=>todo.completed);
  return (
    <React.Fragment>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={ allTodosTrue }
        onClick={ (e) => props.makeAllTodo(!allTodosTrue) }
        onChange={ () => {} }
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        { filteredTodoes.map( todo =>
            <Todo
              key={ todo.id }
              todo={ todo }
            />
          )
        }
      </ul>
    </React.Fragment>
  );
}

export default connect(
  (state) => ({
    todos: state.todos,
    show: state.show
  }),
  { makeAllTodo }
)(List);
