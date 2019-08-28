import React from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom';
import  { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About';
class App extends Component {
  state ={ 
    todos:[
    {
      id:uuid.v4(),
      title:"Sabsy pehly subha 9 bajy erozgaar ki training attend karni hai",
      completed:false
    },
    {
      id:uuid.v4(),
      title:"Uskay baad thora fresh hona hai",
      completed:false
    },
    {
      id:uuid.v4(),
      title:"Phr Software house jana hai",
      completed:false
    },
    {
      id:uuid.v4(),
      title:"Uskay bad internship k tasks complete karnay hain",
      completed:false
    },
    {
      id:uuid.v4(),
      title:"Phr 5 bajy ghar jana hai",
      completed:false
    },
  ]
}
// TOGGLE COMPLETE 
markComplete = (id) =>{
 this.setState({todos: this.state.todos.map(todo=>{
   if(todo.id === id){
     todo.completed = !todo.completed;
   }
   return todo; 
 })})
} 
// Delete Todo
delTodo = (id) =>{
  this.setState({ todos: [...this.state.todos.filter(todo=> todo.id !== id)] })
}
// add todo

addTodo = (title) =>{
  const newTodo = {
    id: uuid.v4(),
    title,
    completed:false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}
render(){
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header/>
      <Route exact path="/" render={props=>(
        <React.Fragment>
      <AddTodo  addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />    
        </React.Fragment>

      )}/>
      <Route path="/about" component={About}/>
      </div>
    </div>
    </Router>
  )
  }

}

export default App;
 