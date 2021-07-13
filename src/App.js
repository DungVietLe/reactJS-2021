
import './App.css';
// import Todoitem from './components/Todoitem';
import React,{ Component } from 'react';
import Todoitem from './components/Todoitem';

class App extends Component {
  constructor(){
    super();
    this.todoItems = ['Mua bim bim', 'di da bong','di do xang'];

  }
  render() {
    return (
      <div className="App">
   
         {
           this.todoItems.map((item,index)=> <Todoitem key={index} title={item}/>)
         }
      
      
      </div>
    );
  }
}

export default App;
