import React, { useState } from 'react';
import { getRakutenAPI } from './axios/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import CategoryItems from './containers/CategoryItems';
import SearchGoods from './containers/SearchGoods';
import { Redirect } from 'react-router-dom';
import SelectAgeModalComponent, {
  SelectContentsModalComponent,
} from './Modal/ModalComponent';

function App() {
  const [selectAgemodalShow, setSelectAgeModalShow] = useState(true);
  const [selectContentsModalShow, setSelectContentsMShow] = useState(false);

  const SelectAgeModalHide = () => {
    setSelectAgeModalShow(false);
    setSelectContentsMShow(true);
  };

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/category/566382" />
        {/* <Route exact from="/" component={SelectAgeModalComponent} /> */}
        <Route path="/category/:categoryId" component={CategoryItems} />
        <Route path="/search/:keyword" component={SearchGoods} />
      </Switch>
      <SelectAgeModalComponent
        show={selectAgemodalShow}
        onHide={() => SelectAgeModalHide()}
      />
      <SelectContentsModalComponent
        show={selectContentsModalShow}
        onHide={() => setSelectContentsMShow(false)}
      />
    </Router>
  );
}

export default App;
