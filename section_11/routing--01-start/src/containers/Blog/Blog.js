import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from '../Blog/NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                      <ul>
                          <li><NavLink 
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration: 'underline'
                            }}
                            to="/posts" 
                            exact>Posts</NavLink></li>
                          <li><NavLink to={{
                              pathname: '/new-post',
                              hash: '#submit',
                              search: '?quick-submit=true'
                          }}>New Post</NavLink></li>
                        </ul> 
                    </nav>
                </header>
                <Switch>
                     {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts"  component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/"  component={Posts} /> */}
                    
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                    {/* TO catch unknown routes, don't set a path, but can't used when using red-rect from the route */}
                    {/* <Route renter={()=> <h1>Page Not Found</h1>} /> */}
                </Switch>
               
            </div>
        );
    }
}

export default Blog;