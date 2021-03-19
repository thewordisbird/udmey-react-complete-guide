import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal =(props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </>
  )
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.show === nextProps.show || prevProps.children === nextProps.children
}
  
export default React.memo(Modal, areEqual);