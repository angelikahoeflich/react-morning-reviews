import React from 'react';
import './App.css';
import List from './components/List'

function App(){
  return (
    <div className= 'App'>
        <h1 className="movie-list-title">The Most Amazing Movie List</h1>
        <List/>
    </div>
  );
};

export default App;

//DOING IT THE CLASS METHOD

// import React, {Component} from 'react';
// import './App.css';

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {

//     }
//   }
//   render(){
//     return(
//       <div className="App">
//         <h1 className="movie-list-title">The Mose Amazing Movie List </h1>
//       </div>
//     )
//   }
// }