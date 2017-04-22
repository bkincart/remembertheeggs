import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import InventoryIndexContainer from './containers/InventoryIndexContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={InventoryIndexContainer} />
    </Route>
    </Router>
  );
}

export default App;
