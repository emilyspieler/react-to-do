import React, { Component } from "react";

class ToDo extends Component {
  render() {
    return (
      <ul>
        <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
          <span>{ this.props.description }</span>
          <button onClick={() => this.props.onDelete}>Delete</button>
        </li>
      </ul>
    );
  }
}

export default ToDo;

 //react to-do Event Handlers
