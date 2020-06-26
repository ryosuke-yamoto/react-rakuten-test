import React from 'react';
import GoodsList from './GoodsList';
import GoodsTitle from './GoodsTitle';

const goodsWrap = {
  backgroundColor: '#fff',
  padding: '20px',
};

const GoodsWrap = () => {
  return (
    <div style={goodsWrap}>
      <GoodsTitle />
      <GoodsList />
    </div>
  );
};

export default GoodsWrap;
