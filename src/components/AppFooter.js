import React from "react";
import { connect } from "react-redux";
import { setFilterTodo, clearCompletedTodo, todoFilterEnum } from "../store/actions";
import FooterButton from "./FooterButton.js";

function AppFooter(props) {
  const filterOnClick = (e, action) => {
    e.preventDefault();
    props.setFilterTodo(action);
  }
  return (
    <footer className="footer" style={{display: 'block'}}>
      <span className="todo-count">
        <strong>
          { props.todos.filter ( (x) => !x.completed ).length }
        </strong>
        &nbsp;items left
      </span>
      <ul className="filters">
        { Object.values(todoFilterEnum).map(entry=>(
          <FooterButton filter={entry} />
        ))}
      </ul>
      <button
        className="clear-completed"
        onClick={ (e) => props.clearCompletedTodo() }
        style={{
          display: props.todos.filter((x)=>(x.completed)).length ? "block" : "none"
        }}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default connect(
  (state) => ({
    todos: state.todos,
    show: state.show
  }),
  { setFilterTodo, clearCompletedTodo }
)(AppFooter);
