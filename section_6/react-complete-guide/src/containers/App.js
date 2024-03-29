import React, { Component } from 'react';

import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    };

  static getDerivedStateFromProps (props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }
  
  componentWillMount() {
    console.log('[App.js] componenetWillMount')
  }

  componentDidMount() {
    console.log('[App.js] componenetDidMount')
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate')
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons =<Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          personsLength={this.state.persons.length} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
