import React from 'react';
import GoodsList from './GoodsList';
import GoodsTitle from './GoodsTitle';
import { Goods } from '../../services/Models';
import SidebarContainer from '../SIidebar/SidebarContainer';
import './GoodsWrap.css';
import { Container, Row, Col } from 'react-bootstrap';

interface GoodsWrapProps {
  goods: Goods[];
}

const GoodsWrap: React.FC<GoodsWrapProps> = ({ goods }) => {
  return (
    <div className="goodsWrap">
      <GoodsTitle />
      {/* <div className="flexWrap"> */}
      <Container fluid>
        <Row>
          <Col md={8} className="goods-list-wrap">
            {/* <div className="goods-list-wrap"> */}
            {goods.map((goodsItem) => {
              return (
                <GoodsList
                  key={goodsItem.Item.itemCode}
                  itemName={goodsItem.Item.itemName}
                  // {
                  //   goodsItem.Item.mediumImageUrls?
                  //   src={goodsItem.Item.mediumImageUrls}:
                  //   src={''}
                  // }
                  src={
                    goodsItem.Item.mediumImageUrls
                      ? goodsItem.Item.mediumImageUrls
                      : []
                  }
                  caption={goodsItem.Item.itemCaption}
                  price={goodsItem.Item.itemPrice}
                  url={goodsItem.Item.itemUrl}
                  // {...props}
                />
              );
            })}
            {/* </div> */}
          </Col>

          <Col md={4}>
            <SidebarContainer />
          </Col>
        </Row>
      </Container>
    </div>
    // </div>
  );
};

export default GoodsWrap;
