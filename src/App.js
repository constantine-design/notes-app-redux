import './App.css';
import React from "react";

import { connect } from "react-redux";
import { toggleTodo, remooveTodo, makeAllTodo, editTodo, showTodo, clearCompletedTodo } from "./store/actions";

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
    console.log(this.props);
    return (
      <section className="todoapp">
        <Add />
        <section className="main" style={{display: 'block'}} >
          <List
            show={ this.props.show }
            todos={ this.props.todos }
            toggleTodo={ this.props.toggleTodo }
            makeAllTodo={this.props.makeAllTodo}
            remooveTodo={ this.props.remooveTodo }
            editTodo={ this.props.editTodo }
          />
        </section>
        <Filters
          todos={ this.props.todos }
          show={ this.props.show }
          showTodo={ this.props.showTodo }
          clearCompletedTodo={ this.props.clearCompletedTodo }
        />
      </section>
    );
  }

}


export default connect(
  (state) => ({
    todos: state.todos,
    show: state.show
  }),
  { toggleTodo, remooveTodo, makeAllTodo, editTodo, showTodo, clearCompletedTodo }
)(App);
