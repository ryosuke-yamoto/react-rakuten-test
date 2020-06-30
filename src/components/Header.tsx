import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

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
        <Link to="/category/566382">
          <Button variant="outline-primary">おもちゃ</Button>{' '}
        </Link>
        <Link to="/category/101070">
          <Button variant="outline-secondary">スポーツ・アウトドア</Button>{' '}
        </Link>
        <Link to="/category/562637">
          <Button variant="outline-success">家電</Button>{' '}
        </Link>
        <Link to="/category/551167">
          <Button variant="outline-warning">スイーツ・お菓子</Button>{' '}
        </Link>
        <Link to="/category/200162">
          <Button variant="outline-danger">本・雑誌・コミック</Button>{' '}
        </Link>
        <Link to="/category/101114">
          <Button variant="outline-info">車・バイク</Button>{' '}
        </Link>
        <Link to="/category/558929">
          <Button variant="outline-dark">腕時計</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
