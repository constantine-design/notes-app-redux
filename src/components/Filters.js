import React from "react";
import { connect } from "react-redux";
import { showTodo, clearCompletedTodo } from "../store/actions";

function Filters(props) {
  const filterOnClick = (e, action) => {
    e.preventDefault();
    props.showTodo(action);
  }
  return (
    <footer className="footer" style={{display: 'block'}}>
      <span className="todo-count">
        <strong>
          { props.todos.filter ( (x) => x.completed === false ).length }
        </strong>
        &nbsp;items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#all"
            className={ props.show==="all" ? "selected" : ""  }
            onClick={ (e) => { filterOnClick(e, "all") } }
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#selected"
            className={ props.show==="active" ? "selected" : ""  }
            onClick={ (e) => { filterOnClick(e, "active") } }
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#completed"
            className={ props.show==="completed" ? "selected" : ""  }
            onClick={ (e) => { filterOnClick(e, "completed") } }
          >
            Completed
          </a>
        </li>
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
  { showTodo, clearCompletedTodo }
)(Filters);
