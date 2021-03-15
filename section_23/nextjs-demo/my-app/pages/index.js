import Link from 'next/link'
import Router from 'next/router'
import { Component } from 'react';


class IndexPage extends Component {

  // Special next js lifecycle hook
  // Executed on the server. Can use it to initialize the app before it loads on the client
  static async getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve({appName: "Super App"})
      }, 1000)
    })
    return promise;
  }

  render () {
    return (
       <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>go to <Link href="/auth">Auth</Link></p>
        <button onClick={() => Router.push('/auth')}>Auth</button>
      </div>
    )
  }
}

export default IndexPage;