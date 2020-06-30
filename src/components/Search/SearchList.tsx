import React from 'react';
import '../Goods/GoodsList.css';
import { Goods } from '../../services/Models';
import '../Goods/GoodsList.css';

interface SearchListProps {
  itemName: string;
  src: string;
  caption: string;
  price: number;
  url: string;
}

const SearchList: React.FC<SearchListProps> = ({
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

export default SearchList;
