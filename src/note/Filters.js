import React from "react";

export default class Filters extends React.Component {
  render() {
    return (
      <footer className="footer" style={{display: 'block'}}>
        <span className="todo-count">
          <strong>
            { this.props.todos.filter ( (x) => x.completed == false ).length }
          </strong>
          &nbsp;items left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#"
              className={ this.props.show=="all" ? "selected" : "dd"  }
              onClick={ (e) => this.props.showTodo("all") }
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              className={ this.props.show=="active" ? "selected" : ""  }
              onClick={ (e) => this.props.showTodo("active") }
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#"
              className={ this.props.showTodo=="completed" ? "selected" : ""  }
              onClick={ (e) => this.props.showTodo("completed") }
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={ (e) => this.props.clearCompletedTodo() }
          style={{
            display: this.props.todos.filter(x=>x.completed==true).length ? "block" : "none"
          }}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}
