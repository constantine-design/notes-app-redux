import logo from './logo.svg';
import './App.css';
import React from "react";


export default class App extends React.Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        <section className="main" style={{display: 'block'}}>
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list"><li data-id={1628678522970} className><div className="view"><input className="toggle" type="checkbox" /><label>Note 1</label><button className="destroy" /></div></li><li data-id={1628678526196} className><div className="view"><input className="toggle" type="checkbox" /><label>Note 2</label><button className="destroy" /></div></li></ul>
        </section>
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
      </section>
    );
  }
}
