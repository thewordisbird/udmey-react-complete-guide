import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from 'react-transition-group/Transition'

class App extends Component {

  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  toggleBlock = () => {
    this.setState(prevState => (
      {
        ...prevState,
        showBlock: !prevState.showBlock
      }
    ))
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button 
          className="Button" 
          onClick={this.toggleBlock}>
            Toggle
        </button>
        <br />
        <Transition 
          in={this.state.showBlock} 
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={()=> console.log('on Enter')}
          onEntering={()=> console.log('on Entering')}
          onEntered={()=> console.log('on Entered')}
          onExit={()=> console.log('on Exit')}
          onExiting={()=> console.log('on Exiting')}
          onExited={()=> console.log('on Exited')}
          >
          {state => (
          <div
          style={{
            backgroundColor: "red",
            width: 100,
            height: 100,
            margin: 'auto',
            transition: 'opacity 1s ease-out',
            opacity: state === 'exiting' ? 0 : 1
          }}>

          </div>
          )}
        </Transition>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
         
            <br />
        <Backdrop show={this.state.modalIsOpen} /> 
        
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
