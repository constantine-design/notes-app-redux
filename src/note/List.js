import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li data-id={1628678522970} >
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Note 1</label>
              <button className="destroy" />
            </div>
          </li>
          <li data-id={1628678526196} >
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Note 2</label>
              <button className="destroy" />
            </div>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
