import './App.css';
import React from "react";
import Add from "./note/Add.js";
import List from "./note/List.js";
import Filters from "./note/Filters.js";


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        todos: [],
        show: 'all',
    };
  }

  createTodo = (title) => {
    this.setState({
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
      todos: this.state.todos.filter ( (x) => x.completed == false )
      }
    );
  }

  doneTodo = (id) => {
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

  editTodo = (id, e) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, title: e.target.value} :
          item
          )
      }
    );
  }

  showTodo = (s) => {
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
