
import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.jsx';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
       newTodoDescription: ''
     };
   }

handleDelete (itemToBeDeleted) {
var newItems = this.state.items.filter((_item) => {
  return _item !== itemToBeDeleted
});
 this.setState({ items: newItems});
}

   handleChanges(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleChange (event) {
    var text = event.target.value;
    console.log(text);
    this.setState({ text: text });
  }

handleSubmit(e) {
  e.preventDefault();
  if (!this.state.newTodoDescription) { return }
  const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
  this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

     render() {
          return (
            <div className="App">
              <ul>
                { this.state.todos.map( (todo, index) =>
                  <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={ () => this.toggleComplete(index) } />
                )}
              </ul>
              <form onSubmit={ (e) => this.handleSubmit(e) }>
                <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
                <input type="submit" />
              </form>

              <ToDo
              handleDelete={this.handleDelete.bind(this)}
              items={this.state.items} />
            </div>
          );
        }
      }

export default App;


// React to-do part Event Handlers
