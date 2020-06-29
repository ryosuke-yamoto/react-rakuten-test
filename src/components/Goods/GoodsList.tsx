import React from 'react';
import './GoodsList.css';
import { Goods } from '../../services/Models';

interface GoodsListProps {
  itemName: string;
  src: string;
  caption: string;
  price: number;
}

const GoodsList: React.FC<GoodsListProps> = ({
  itemName,
  caption,
  src,
  price,
}) => {
  console.log(itemName);
  return (
    <div>
      <h2 className="goods-title">「」の商品</h2>
      <div className="goods-wrap">
        <img src={src} className="goods-img" />
        <div className="goods-text-wrap">
          <p className="goods-title">{itemName}</p>
          <p className="goods-caption">{caption}</p>
          <p className="price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default GoodsList;
