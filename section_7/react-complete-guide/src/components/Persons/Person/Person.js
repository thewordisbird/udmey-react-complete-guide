import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

// import Aux from '../hoc/Aux';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component{
  constructor (props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  //Creates new property in class 'this.context'
  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render () {
    console.log('[Person.js] rendering...')
    return (
     <React.Fragment>
         {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
 
          <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input 
            // ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name} />
   
 </React.Fragment>
      
    );
  }
}
Person.propTypes = {
  click: PropTypes.func.isRequired,
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
}
export default withClass(Person, classes.Person);
