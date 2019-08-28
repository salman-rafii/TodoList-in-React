  import React, { Component } from 'react';
 import PropTypes from 'prop-types';

 export class TodoItem extends Component{
    getStyle = () => 
    {
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px dotted #ccc',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
               }   

    }
 

    render()
    {
         return (
            <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />
              {' '}  {this.props.todo.title}
              <button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={btnStyle}>x</button>
            </p>
            </div>
         )
     }
}

// const itemStyle = 
// {
//      backgroundColor:'#f4f4f4'
// }
// PropTypes
 TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
  }
const btnStyle = {
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
 export default TodoItem;