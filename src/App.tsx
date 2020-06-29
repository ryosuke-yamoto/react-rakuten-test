import React, { useEffect } from 'react';
import { getRakutenAPI } from './axios/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryItems from './containers/CategoryItems';
import { Redirect } from 'react-router-dom';

function App() {
  // useEffect(() => {
  //   getRakutenAPI();
  // }, []);

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/category/566382" />
        <Route path="/category/:categoryId" component={CategoryItems} />
      </Switch>
    </Router>
  );
}

export default App;
