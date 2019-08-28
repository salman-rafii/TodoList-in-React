import React, { Component } from 'react'

export class AddTodo extends Component {
   state = {
       title: ''
   }
   onChange = (e) =>{ this.setState({
       title: e.target.value
   })}
   onSubmit = (e) =>{
       e.preventDefault();
       this.props.addTodo(this.state.title);
       this.setState( { title:''})
   }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={flex}>
                <input type="text" 
                name="title" 
                placeholder="Add Todo" 
                value={this.state.title} 
                onChange={this.onChange}
                style={{flex:'10', padding:'5px'}} />
               <input type="submit" value="Submit" className="btn" style={{flex:'1'}} />
            </form>
        )
    }
}
const flex = {
    display: 'flex'
}

export default AddTodo
