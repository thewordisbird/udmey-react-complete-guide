// eslint-disable-next-line no-unused-vars
import React, { Component, useState } from 'react';
import './App.css';

import Person from './Person/Person'

// Class Based Components 
class App extends Component {
  state = {
    persons: [
      { id:'aergarg', name: 'Justin', age: '36'},
      { id: 'asdfasdfg', name: 'Lindsay', age: '33'},
      { id: 'aerghnsrt', name: 'Amanda', age: '33'},
    ],
    otherState: 'some other state',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState( {persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render (){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person,index) => {
            return (
              <Person 
                key={person.id} 
                name={person.name} 
                age={person.age} 
                handleClick={() => this.deletePersonHandler(index)}
                handleChange={(event) => this.nameChangeHandler(event, person.id)}/>
            )
          })}
          
        </div>
      )
    }
    return (
    <div className="App">
      
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
      {persons}  
    </div>
    );

    // This is what the JSX code compiles to, and why React needs to be imported
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a react app'))
  }
}

export default App;