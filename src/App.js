import './App.css';
import React from "react";

import { connect } from "react-redux";
import { addTodo } from "./store/actions";

import Add from "./components/Add.js";
import List from "./components/List.js";
import Filters from "./components/Filters.js";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        todos: [],
        show: 'all',
    };
  }

  createTodo = (title) => {
    if (title.trim()) this.setState({
      todos: [
        ...this.state.todos,
        {id: Date.now(), title, completed: false}
      ]
    });
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, completed: !item.completed} :
          item
          )
      }
    );
  }

  remooveTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter ( (x) => x.id !== id )
      }
    );
  }

  clearCompletedTodo = () => {
    this.setState({
      todos: this.state.todos.filter ( (x) => !x.completed )
      }
    );
  }

  makeAllTodo = (m) => {
    this.setState({
      todos: this.state.todos.map(
          item => ({ ...item, completed: m })
        )
      }
    );
  }

  editTodo = (id, newval) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, title: newval} :
          item
          )
      }
    );
  }

  showTodo = (s, e) => {
    e.preventDefault();
    this.setState({ show: s });
  }

  render() {
    return (
      <section className="todoapp">
        <Add
          createTodo={this.createTodo}
        />
        <section className="main" style={{display: 'block'}} >
          <List
            show={ this.state.show }
            todos={ this.state.todos }
            toggleTodo={ this.toggleTodo }
            makeAllTodo={this.makeAllTodo}
            remooveTodo={ this.remooveTodo }
            editTodo={ this.editTodo }
          />
        </section>
        <Filters
          todos={ this.state.todos }
          show={ this.state.show }
          showTodo={ this.showTodo }
          clearCompletedTodo={ this.clearCompletedTodo }
        />
      </section>
    );
  }

}

export default connect(
  { addTodo },
  (state) => ({ todos: state.tods })
)(App);
