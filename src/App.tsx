import React, { useState, useEffect } from 'react';
import { getRakutenAPI } from './axios/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import firebase from './firebase';
import CategoryItems from './containers/CategoryItems';
import SearchGoods from './containers/SearchGoods';
import SignUp from './components/Signature/SingUp';
import SignIn from './components/Signature/SignIn';
import SignOut from './components/Signature/SignOut';
import { Redirect } from 'react-router-dom';
import SelectAgeModalComponent, {
  SelectContentsModalComponent2,
} from './Modal/ModalComponent';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { State } from './reducer/reducer';

interface AppProps {
  login?: boolean;
  signup?: boolean;
}

const App: React.FC<AppProps> = ({ signup }) => {
  const initialState = signup === false ? true : false;
  const [selectAgemodalShow, setSelectAgeModalShow] = useState(initialState);
  const [selectContentsModalShow, setSelectContentsMShow] = useState(false);
  const [user, setUser] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);

  const SelectAgeModalHide = () => {
    setSelectAgeModalShow(false);
    setSelectContentsMShow(true);
  };

  return (
    <Router>
      <Switch>
        {/* {signup == true ? ( */}
        {/* <Route exact from="/" component={SelectAgeModalComponent} />
        ) : ( */}
        <Redirect exact from="/" to="/category/566382" />
        {/* )} */}
        {/* <Redirect exact from="/" to="/category/566382" /> */}
        {/* // <Route exact from="/" component={SelectAgeModalComponent} /> */}
        <Route path="/category/:categoryId" component={CategoryItems} />
        <Route path="/search/:keyword" component={SearchGoods} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signOut" component={SignOut} />
      </Switch>
      {signup == true && (
        <div>
          <SelectAgeModalComponent
            show={selectAgemodalShow}
            onHide={() => SelectAgeModalHide()}
          />
          <SelectContentsModalComponent2
            show={selectContentsModalShow}
            onHide={() => setSelectContentsMShow(false)}
          />
        </div>
      )}
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

const mapStateToProps = (state: State) => {
  return {
    signup: state.logged.signup,
    login: state.logged.login,
  };
};

export default connect(mapStateToProps, null)(App);

// export default App;
