import React from 'react';
import { Goods } from '../../services/Models';
import SearchList from './SearchList';
import SearchTitle from './SearchTitle';
import SidebarContainer from '../SIidebar/SidebarContainer';
import '../Goods/GoodsWrap.css';
import { Container, Row, Col } from 'react-bootstrap';

interface SearchWrapProps {
  searchedGoods: Goods[];
}

const goodsWrap = {
  backgroundColor: '#fff',
  padding: '20px',
};

const SearchWrap: React.FC<SearchWrapProps> = ({ searchedGoods }) => {
  return (
    <div className="goodsWrap">
      <SearchTitle />
      <Container fluid>
        <Row>
          <Col md={8} className="goods-list-wrap">
            {searchedGoods.map((searchedGoodsItem) => {
              return (
                <SearchList
                  key={searchedGoodsItem.Item.itemCode}
                  itemName={searchedGoodsItem.Item.itemName}
                  src={
                    searchedGoodsItem.Item.mediumImageUrls
                      ? searchedGoodsItem.Item.mediumImageUrls
                      : []
                  }
                  caption={searchedGoodsItem.Item.itemCaption}
                  price={searchedGoodsItem.Item.itemPrice}
                  url={searchedGoodsItem.Item.itemUrl}
                />
              );
            })}
          </Col>
          <Col md={4}>
            <SidebarContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchWrap;
