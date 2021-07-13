
import './App.css';
// import Todoitem from './components/Todoitem';
import React,{ Component } from 'react';
import Todoitem from './components/Todoitem';
import Hinhanh from './components/Hinhanh';

class App extends Component {
  constructor(){
    super();
    this.todoItems = ['Mua bim bim', 'di da bong','di do xang'];
this.listIMG = [
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png",
  "https://image.vietnamnews.vn/uploadvnnews/Article/2019/7/22/26541_b.JPG",
  "https://cdn-www.vinid.net/2019/06/31167447-h%C3%A3y-trao-cho-anh-s%C6%A1n-t%C3%B9ng-mtp.jpg"
]
  }
  render() {
    return (
      <div className="App">
   
         {
           this.todoItems.map((item,index)=> <Todoitem key={index} title={item} />)
           
         }
         
      {
        this.listIMG.map((a,b)=> <Hinhanh key={b} src={a} />)
      }
      
      </div>
    );
  }
}

export default App;
