import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col } from 'react-bootstrap';
import './Header.css';

console.log(Button);

const Header = () => {
  return (
    <div className="headerWrap">
      <div className="headerNav">
        <h1 className="appTitle">やも天市場</h1>
        <Form>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" srOnly>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="商品検索"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                検索
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
      <div className="buttonGroup">
        <Button variant="outline-primary">おもちゃ</Button>{' '}
        <Button variant="outline-secondary">スポーツ・アウトドア</Button>{' '}
        <Button variant="outline-success">家電</Button>{' '}
        <Button variant="outline-warning">スイーツ・お菓子</Button>{' '}
        <Button variant="outline-danger">本・雑誌・コミック</Button>{' '}
        <Button variant="outline-info">車・バイク</Button>{' '}
        <Button variant="outline-dark">腕時計</Button>
      </div>
    </div>
  );
};

export default Header;
