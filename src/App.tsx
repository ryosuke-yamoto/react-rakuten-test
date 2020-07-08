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
  SelectContentsModalComponent2,
} from './Modal/ModalComponent';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface AppProps {
  login?: boolean;
}

const App: React.FC<AppProps> = ({ login }) => {
  const initialState = login === false ? true : false;
  const [selectAgemodalShow, setSelectAgeModalShow] = useState(initialState);
  const [selectContentsModalShow, setSelectContentsMShow] = useState(false);

  const SelectAgeModalHide = () => {
    setSelectAgeModalShow(false);
    setSelectContentsMShow(true);
  };

  return (
    <Router>
      <Switch>
        {login == false ? (
          <Route exact from="/" component={SelectAgeModalComponent} />
        ) : (
          <Redirect exact from="/" to="/category/566382" />
        )}
        {/* <Redirect exact from="/" to="/category/566382" /> */}
        // <Route exact from="/" component={SelectAgeModalComponent} />
        <Route path="/category/:categoryId" component={CategoryItems} />
        <Route path="/search/:keyword" component={SearchGoods} />
      </Switch>
      <SelectAgeModalComponent
        show={selectAgemodalShow}
        onHide={() => SelectAgeModalHide()}
      />
      <SelectContentsModalComponent2
        show={selectContentsModalShow}
        onHide={() => setSelectContentsMShow(false)}
      />
    </Router>
  );
};

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     getRankingSortAge: (age: string) => dispatch(getRankingSortAge(age)),
//     loggedIn: () => dispatch(loggedIn()),
//     // getGoods: (goods: Goods[]) => dispatch(getGoods(goods)),
//   };
// };

const mapStateToProps = (state: any) => {
  return {
    login: state.logged.login,
  };
};

export default connect(mapStateToProps, null)(App);

// export default App;
