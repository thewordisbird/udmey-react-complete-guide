import React, { Component } from 'react';

import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

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
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
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

    this.setState(state => (
      { 
        ...state,
        persons: persons,
        changeCounter: state.changeCounter 
        
      }
    ));
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

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons =<Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} 
          isAuthenticated={this.state.authenticated}/>
    }

    

    return (
      <Aux>

         <button
          onClick={() => {
            this.setState(state => (
              {
                ...state,
                showCockpit: !state.showCockpit
              }
            ));
          }}
        >
          {this.state.showCockpit ? 'Remove Cockpit' : 'Show Cockpit'}
        </button>
          <AuthContext.Provider 
            value={{
              authenticated: this.state.authenticated, 
              login: this.loginHandler
            }}>
{this.state.showCockpit ?
          <Cockpit 
            personsLength={this.state.persons.length} 
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} 
          />
          : null
        }
        {persons}

          </AuthContext.Provider>
        
      </Aux>
       
      
    );
  }
}

export default withClass(App, classes.App);
