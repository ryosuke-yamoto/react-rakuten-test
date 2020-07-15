import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './SignNav.css';
import { Link } from 'react-router-dom';

const SignNav = () => {
  return (
    <React.Fragment>
      <Breadcrumb listProps={{ className: 'breadcrumb-ol' }}>
        <li>
          <Link to="/SignUp">新規登録</Link>
        </li>
        {/* <Breadcrumb.Item> */}
        <li>
          <Link to="/SignIn">ログイン</Link>
        </li>
        {/* </Breadcrumb.Item> */}
        {/* <Breadcrumb.Item> */}
        <li>
          <Link to="/SignOut">ログアウト</Link>
        </li>
        {/* </Breadcrumb.Item> */}
      </Breadcrumb>
    </React.Fragment>
  );
};

export default SignNav;
