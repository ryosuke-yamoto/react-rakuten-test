import React, { useState } from 'react';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import firebase from '../../firebase';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { signUp, loggedIn } from '../../action/goodsAction';

const SingUp = ({ signUp }: any) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user) {
          user.updateProfile({
            displayName: name,
          });
          signUp();
          history.push('./');
        }
        // dispatch(deleteAll()).catch(function (error) {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   console.log(errorCode);
        //   console.log(errorMessage);
        // });
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  };

  return (
    <div>
      <Form onSubmit={(e: any) => handleSubmit(e)}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    signup: state.logged.signup,
    login: state.logged.login,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: () => dispatch(signUp()),
    loggedIn: () => dispatch(loggedIn()),
    // getGoods: (goods: Goods[]) => dispatch(getGoods(goods)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);
