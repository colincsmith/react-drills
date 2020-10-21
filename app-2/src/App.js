import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      message: ["apple", "banana", "mango", "pineapple"]
    }
  }
  
  

render () {
  let messageToDisplay = this.state.message.map((element, index) => {
    return <h2 key={index}> {element}</h2>
  })
return <div className="App">{messageToDisplay}</div>
  }
}
export default App;
