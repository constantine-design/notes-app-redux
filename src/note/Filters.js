import React from "react";

export default class Filters extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer className="footer" style={{display: 'block'}}>
        <span className="todo-count"><strong>2</strong> items left</span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed" style={{display: 'none'}} />
      </footer>
    );
  }
}
