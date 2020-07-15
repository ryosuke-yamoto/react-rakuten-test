import React from 'react';
import firebase from '../../firebase';
import { useHistory } from 'react-router-dom';

const SignOut = () => {
  const history = useHistory();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    firebase.auth().signOut();
    history.push('/category/566382');
  };
  return (
    <div>
      <button onClick={(e) => handleSubmit(e)}>ログアウト</button>
    </div>
  );
};

export default SignOut;
