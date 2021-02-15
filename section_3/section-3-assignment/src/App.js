import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

export class App extends Component {
  state = {userName: 'Justin'}

  updateNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render () {
    return (
      <div class="App">
        <UserInput userName={this.state.userName} handleChane={this.updateNameHandler}/>

        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
      </div>
      
    )
  }
}
export default App;
