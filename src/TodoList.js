import React, {Component} from 'react';

import TodoItem from './Items';


class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state ={
      //define an items array
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
         return{
           items: prevState.items.concat(newItem) }
          

      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }
    render(){
        return(
            <div className="todoListMain">
            <h1>Hello, welcome to the TodoList App By Had</h1>
        <div className="header">
          <form onSubmit={this.addItem}>
          <div className="form-group">
            <input ref={(a)=>this._inputElement = a} className="form-control" placeholder="enter task">
            </input>
            </div>
            <button type="submit" className="btn btn-primary" ><i className="fa fa-plus"/> Add</button>
          </form>
        </div>
        <TodoItem entries ={this.state.items} delete ={this.deleteItem}/>
      </div>
        );
    }
}
export default TodoList;