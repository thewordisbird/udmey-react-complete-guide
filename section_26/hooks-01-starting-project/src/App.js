import React, { useContext } from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';
import {AuthContext} from './context/auth-context'
const App = props => {
  console.log('[App]')
  const authContext = useContext(AuthContext)

  const contentRendered = authContext.isAuth ? <Ingredients /> : <Auth />
  return <> {contentRendered}</>
};

export default App;
