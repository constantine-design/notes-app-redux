import React from "react";
import Todo from "./Todo.js";
import { connect } from "react-redux";
import { makeAllTodo, todoFilterEnum } from "../store/actions";

function AppTodosList(props) {
  let filteredTodoes = props.todos;    console.log(props.show+"--"+todoFilterEnum.active);
  if ( props.show === todoFilterEnum.active) filteredTodoes = props.todos.filter ( (x) => !x.completed );
  if ( props.show === todoFilterEnum.completed) filteredTodoes = props.todos.filter ( (x) => x.completed );
  const isAllTodosTrue = props.todos.length ? props.todos.every(todo=>todo.completed) : false;
  return (
    <React.Fragment>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={ isAllTodosTrue }
        onClick={ (e) => props.makeAllTodo(!isAllTodosTrue) }
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
)(AppTodosList);
