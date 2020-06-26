import React from 'react';
import './GoodsList.css';

const GoodsList = () => {
  return (
    <div>
      <h2 className="goods-title">「」の商品</h2>
      <div className="goods-wrap">
        <img
          src="https://www.homepage-tukurikata.com/image/lion.jpg"
          className="goods-img"
        />
        <div className="goods-text-wrap">
          <p className="goods-title">タイトル</p>
          <p className="goods-caption">商品説明</p>
          <p className="price">値段</p>
        </div>
      </div>
    </div>
  );
};

export default GoodsList;
