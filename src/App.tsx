import React, { useEffect } from 'react';
import { getRakuten } from './axios/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryItems from './pages/CategoryItems';

function App() {
  useEffect(() => {
    getRakuten();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" component={CategoryItems} />
      </Switch>
    </Router>
  );
}

export default App;
