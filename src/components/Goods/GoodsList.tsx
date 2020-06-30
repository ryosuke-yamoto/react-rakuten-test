import React from 'react';
import './GoodsList.css';
import { Goods } from '../../services/Models';

interface GoodsListProps {
  itemName: string;
  src: string;
  caption: string;
  price: number;
  url: string;
}

const GoodsList: React.FC<GoodsListProps> = ({
  itemName,
  caption,
  src,
  price,
  url,
}) => {
  return (
    <div className="goods-wrap">
      <img src={src} className="goods-img" />
      <div className="goods-text-wrap">
        <a href={url} className="goods-title">
          {itemName}
        </a>
        <p className="goods-caption">{caption}</p>
        <p className="goods-price">（値段）{price}円</p>
      </div>
    </div>
  );
};

export default GoodsList;
