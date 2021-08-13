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
    );alert();
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
          />
        </section>
        <Filters
          todos={ this.state.todos }
          showTodo={ this.showTodo }
          clearCompletedTodo={ this.clearCompletedTodo }
        />
      </section>
    );
  }
}
