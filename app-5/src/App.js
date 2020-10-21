import React, {Component} from 'react';
import './App.css';
import Image from "./Image"

class App extends Component {
  render() {
    return(
      <div className="App">
        <Image url= {"https://i.kym-cdn.com/entries/icons/mobile/000/020/002/memeeman.jpg"}/>
      </div>
    )
  }
}



export default App;
