import React, { Component } from 'react';


class ToDo extends Component {
  render () {
    return  <ul>
              {this.props.items.map((item, index) => {
                return <li key={item}>
                          { item }
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <button onClick = {this.props.handleDelete.bind(null, item)}>Delete</button>
         <span>{this.props.description}</span>
       </li>
     }) }
     </ul>;
   }
 }

export default ToDo;

 //react to-do Event Handlers
