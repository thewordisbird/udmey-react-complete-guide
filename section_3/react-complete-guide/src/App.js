// eslint-disable-next-line no-unused-vars
import React, { Component, useState } from 'react';
import './App.css';

import Person from './Person/Person'

// Class Based Components 
class App extends Component {
  state = {
    persons: [
      {name: 'Justin', age: '36'},
      {name: 'Lindsay', age: '33'},
      {name: 'Amanda', age: '33'},
    ],
    otherState: 'some other state'
  }

  switchNameHandler = (newName) =>{
    // console.log('was clicked')
    this.setState(
      {persons: [
        {name: newName, age: '36'},
        {name: 'Lindsay', age: '33'},
        {name: 'Amanda', age: '33'},
      ]}
    )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Justin', age: '36'},
        {name: event.target.value, age: '33'},
        {name: 'Amanda', age: '33'},
      ]
    })
  }

  render (){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
    <div className="App">
      
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={() => this.switchNameHandler('An All New Justin')}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} handleClick={this.switchNameHandler.bind(this, 'Justin Bird')}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} handleClick={this.switchNameHandler} handleChange={this.nameChangeHandler}>My Hobbies are Dogs </Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} handleClick={this.switchNameHandler}/>
    </div>
    );

    // This is what the JSX code compiles to, and why React needs to be imported
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a react app'))
  }
}

//   const INITIAL_STATE = {
//     persons: [
//       {name: 'Justin', age: '36'},
//       {name: 'Lindsay', age: '33'},
//       {name: 'Amanda', age: '33'},
//     ],
//     otherState: 'some other state'
//   }

//   // Functional Based components with hooks
// const App = () => {
//   const [state, setState] = useState(INITIAL_STATE)

//   const switchNameHandler = () => {
//     setState( state => (
//       {
//         ...state,
//         persons: [
//           {name: 'Justin Bird', age: '36'},
//           {name: 'Lindsay Bird', age: '33'},
//           {name: 'Amanda Bird', age: '33'},
//         ]
//       }
//     ))
//   }

//   return (
//     <div className="App">
      
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={state.persons[0].name} age={state.persons[0].age}/>
//       <Person name={state.persons[1].name} age={state.persons[1].age}>My Hobbies are Dogs </Person>
//       <Person name={state.persons[2].name} age={state.persons[2].age}/>
//     </div>
//   );
// }

export default App;
