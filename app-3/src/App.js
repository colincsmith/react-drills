import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      filterString: "",
      message: ["banana", "apple", "mango", "guava", "kiwi"]
    }
  }
  
  handleChange(filter) {
    this.setState({ filterString: filter})
  }
  
  render() {
    let messageToShow = this.state.message
    .filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

  return (
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text" />
      {messageToShow}
    </div>
  )
  
  }
}
export default App;
