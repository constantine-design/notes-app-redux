import React from "react";

export default class List extends React.Component {
  render() {
    let filteredTodoes = this.props.todos;
    if ( this.props.show === "active") filteredTodoes = this.props.todos.filter ( (x) => x.completed == false );
    if ( this.props.show === "completed") filteredTodoes = this.props.todos.filter ( (x) => x.completed == true );
    return (
      <React.Fragment>
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          { filteredTodoes.map( todos =>
              <li
                key={ todos.id }
                className={ todos.completed ? "completed" : "" }
              >
                <div className="view">
                  <input className="toggle" type="checkbox" checked={ todos.completed } onChange={ (e) => this.props.toggleTodo(todos.id) }/>
                  <input
                    className="todo"
                    type="text"
                    value={ todos.title }
                    onChange={ (e) => this.props.editTodo(todos.id, e) }
                  />
                  <button className="destroy" onClick={ (e) => this.props.remooveTodo(todos.id) } />
                </div>
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}
