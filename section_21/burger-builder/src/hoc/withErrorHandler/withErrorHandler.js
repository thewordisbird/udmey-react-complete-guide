import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    constructor(props) {
      super(props)

      this.state = {
          error: null
      }

      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })

      this.respInterceptor = axios.interceptors.response.use(resp => {
        return resp
      }, error => {
        console.log('[withErrorHandler, withErrorHandler] - Error:', error)
        this.setState({error: error})
      })
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.respInterceptor)
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }

    render () {
      return (
        <>
        <Modal 
          show={this.state.error} 
          modalClosed={this.errorConfirmedHandler}>
          {this.state.error ? this.state.error.message : null}
        </Modal>
          <WrappedComponent {...this.props} />
        </>
        
      );
  }
  }
}

export default withErrorHandler;