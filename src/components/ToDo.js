import React, { Component } from 'react';


class ToDo extends Component {
  render () {
    return
         { this.state.todos.map((item, i) => {
        return <li key={item}>
            { item }
         <input type="checkbox" checked={ this.props.isCompleted } onChange ={ this.props.toggleComplete } />
         <span>{this.props.description}</span>
         <a href='#' onClick={this.props.handleDelete}>[x]</a>
       </li>
     });
   }
 }

export default ToDo;

 //react to-do Event Handlers
