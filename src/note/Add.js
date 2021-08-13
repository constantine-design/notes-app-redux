import React from "react";

export default class Add extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        value: ""
    }
  }

  onKeyPress = (e) => {
    if(e.key === "Enter") {
        this.props.createTodo(this.state.value);
        this.setState({value: ""});
    }
  }

  render() {
    return (
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={this.state.value}
            onChange={ (e) => this.setState({value: e.target.value}) }
            onKeyPress={ (e) =>  this.onKeyPress(e) }
          />
        </header>
    );
  }

}