import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modal.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getRankingSortAge, loggedIn, signUp } from '../action/goodsAction';
import { State } from '../reducer/reducer';
import firebase from '../firebase';
import { loggedInUser } from '../action/goodsAction';
import { User } from '../services/Models';

type SelectAgeModalComponentProps = DispatchProp & StateProp;
// {
//   getrankingsortage: any;
//   onHide: () => void;
//   show: boolean;
// }

interface DispatchProp {
  getrankingsortage: (age: string) => void;
  loggedIn: () => void;
  loggedInUser: (user: User) => void;
  signUp: () => void;
}

interface StateProp {
  onHide: () => void;
  show: boolean;
  login: boolean;
  age: string;
}

const SelectAgeModalComponent: React.FC<SelectAgeModalComponentProps> = ({
  getrankingsortage,
  loggedIn,
  loggedInUser,
  ...props
}) => {
  console.log(props);
  const [age, setAge] = useState('');
  const handleClick = () => {
    props.onHide();
    getrankingsortage(age);
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        firebase
          .database()
          .ref('users/' + user.uid)
          .push({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            age: age,
          });
        const loginUser = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          age: age,
        };
        loggedInUser(loginUser);
        console.log(user);
      }
    });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
      // closeButton
      >
        <Modal.Title id="contained-modal-title-vcenter">
          ようこそ。やも天市場へ！
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          あなたがこのサイトをより使いやすく利用できるようにいくつか設定を行います。
        </p>
        <p>＜あなたの年齢を教えて下さい＞</p>
      </Modal.Body>
      <DropdownButton
        id="dropdown-basic-button"
        title="年代"
        className="modal-button"
        drop="right"
      >
        <Dropdown.Item
          eventKey="10"
          as="button"
          className="dropdown-item"
          onClick={() => setAge('10')}
        >
          10代
        </Dropdown.Item>
        <Dropdown.Item eventKey="20" as="button" onClick={() => setAge('20')}>
          20代
        </Dropdown.Item>
        <Dropdown.Item eventKey="30" as="button" onClick={() => setAge('30')}>
          30代
        </Dropdown.Item>
        <Dropdown.Item eventKey="40" as="button" onClick={() => setAge('40')}>
          40代
        </Dropdown.Item>
        <Dropdown.Item eventKey="50" as="button" onClick={() => setAge('50')}>
          50代
        </Dropdown.Item>
        {/* <Dropdown.Item eventKey="60" as="button" onClick={() => setAge('60')}>
          60代
        </Dropdown.Item> */}
      </DropdownButton>
      <Modal.Footer>
        <Button onClick={handleClick} disabled={age == ''}>
          次へ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProp => {
  return {
    getrankingsortage: (age: string) => dispatch(getRankingSortAge(age)),
    loggedIn: () => dispatch(loggedIn()),
    loggedInUser: (user: User) => dispatch(loggedInUser(user)),
    signUp: () => dispatch(signUp()),
  };
};

interface mapStateToPropsArg {
  login: boolean;
  age: string;
}

const mapStateToProps = (state: State): mapStateToPropsArg => {
  return {
    login: state.logged.login,
    age: state.rankingSort.age,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAgeModalComponent);

const SelectContentsModalComponent = ({
  getrankingsortage,
  loggedIn,
  signUp,
  ...props
}: any) => {
  const [contents, setContents] = useState('');
  const history = useHistory();
  const handleSubmit = () => {
    props.onHide();
    history.push(`/category/${contents}`);
    loggedIn();
    signUp();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          ＜興味のあるカテゴリを選んでください＞
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="buttonGroup">
          <Container>
            <Row className="content-row content-row-first">
              <Col className="content-col">
                <Button
                  variant="outline-primary"
                  className="select-content-button"
                  onClick={() => setContents('566382')}
                >
                  おもちゃ
                </Button>{' '}
              </Col>
              <Col className="content-col">
                <Button
                  variant="outline-secondary"
                  className="select-content-button"
                  onClick={() => setContents('101070')}
                >
                  <p>スポーツ</p>
                  <p>アウトドア</p>
                </Button>{' '}
              </Col>
              <Col className="content-col">
                <Button
                  variant="outline-success"
                  className="select-content-button"
                  onClick={() => setContents('562637')}
                >
                  家電
                </Button>{' '}
              </Col>
            </Row>
            <Row className="content-row">
              <Col className="content-col content-col-second">
                <Button
                  variant="outline-warning"
                  className="select-content-button"
                  onClick={() => setContents('551167')}
                >
                  <p className="content-p">スイーツ</p>
                  <p>お菓子</p>
                </Button>{' '}
              </Col>
              <Col className="content-col content-col-second">
                <Button
                  variant="outline-danger"
                  className="select-content-button"
                  onClick={() => setContents('200162')}
                >
                  <p className="content-p">本・雑誌</p>
                  <p>コミック</p>
                </Button>{' '}
              </Col>
              <Col className="content-col content-col-second">
                <Button
                  variant="outline-info"
                  className="select-content-button"
                  onClick={() => setContents('100026')}
                >
                  <p className="content-p">パソコン</p>
                  <p>周辺機器</p>
                </Button>{' '}
              </Col>
              <Col className="content-col content-col-second">
                <Button
                  variant="outline-dark"
                  className="select-content-button"
                  onClick={() => setContents('558929')}
                >
                  腕時計
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} disabled={contents == ''}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// const mapStateToProps = (state) => {
//   return {

//   }
// }

export const SelectContentsModalComponent2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectContentsModalComponent);
