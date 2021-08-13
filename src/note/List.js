import React from "react";

export default class List extends React.Component {
  /*constructor(props) {
    super(props);
    this.props = props;
  }*/
  render() {
    return (
      <React.Fragment>
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          { this.props.todos.map( todos =>
              <li data-id={ todos.id } >
                <div className="view">
                  <input className="toggle" type="checkbox" onClick={ (e) => this.props.toggleTodo(todos.id) }/>
                  <label>{ todos.title }</label>
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
