import React from 'react';
import { Goods } from '../../services/Models';
import SearchList from './SearchList';
import SearchTitle from './SearchTitle';

interface SearchWrapProps {
  searchedGoods: Goods[];
}

const goodsWrap = {
  backgroundColor: '#fff',
  padding: '20px',
};

const SearchWrap: React.FC<SearchWrapProps> = ({ searchedGoods }) => {
  return (
    <div style={goodsWrap}>
      <SearchTitle />
      {searchedGoods.map((searchedGoodsItem) => {
        return (
          <SearchList
            key={searchedGoodsItem.Item.itemName}
            itemName={searchedGoodsItem.Item.itemName}
            src={searchedGoodsItem.Item.mediumImageUrls[0].imageUrl}
            caption={searchedGoodsItem.Item.itemCaption}
            price={searchedGoodsItem.Item.itemPrice}
            url={searchedGoodsItem.Item.itemUrl}
          />
        );
      })}
    </div>
  );
};

export default SearchWrap;
