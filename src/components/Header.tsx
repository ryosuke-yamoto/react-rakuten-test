import React, { FormEvent, useState } from 'react';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import Slider from 'react-slick';

const Header = () => {
  const [value, setValue] = useState('');
  const history = useHistory();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/search/${value}`);
  };

  return (
    <div className="headerWrap">
      <div className="headerNav">
        <h1 className="appTitle">やも天市場</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" srOnly>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="商品検索"
                value={value}
                onChange={(e) => setValue(e.target.value)}
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
        <div className="first-button-group">
          <Link to="/category/566382" className="button">
            <Button variant="outline-primary">おもちゃ</Button>{' '}
          </Link>

          <Link to="/category/101070" className="button">
            <Button variant="outline-secondary">スポーツ・アウトドア</Button>{' '}
          </Link>

          <Link to="/category/562637" className="button">
            <Button variant="outline-success">家電</Button>{' '}
          </Link>
        </div>
        <div className="second-button-group">
          <Link to="/category/551167" className="button">
            <Button variant="outline-warning">スイーツ・お菓子</Button>{' '}
          </Link>

          <Link to="/category/200162" className="button">
            <Button variant="outline-danger">本・雑誌・コミック</Button>{' '}
          </Link>
          <Link to="/category/100026" className="button">
            <Button variant="outline-info">パソコン・周辺機器</Button>{' '}
          </Link>
          <Link to="/category/558929" className="button">
            <Button variant="outline-dark">腕時計</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
