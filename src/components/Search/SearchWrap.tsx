import React from 'react';
import { Goods } from '../../services/Models';
import SearchList from './SearchList';
import SearchTitle from './SearchTitle';
import SidebarContainer from '../SIidebar/SidebarContainer';
import '../Goods/GoodsWrap.css';

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
      <div className="flexWrap">
        <div className="goods-list-wrap">
          {searchedGoods.map((searchedGoodsItem) => {
            return (
              <SearchList
                key={searchedGoodsItem.Item.itemCode}
                itemName={searchedGoodsItem.Item.itemName}
                src={searchedGoodsItem.Item.mediumImageUrls}
                caption={searchedGoodsItem.Item.itemCaption}
                price={searchedGoodsItem.Item.itemPrice}
                url={searchedGoodsItem.Item.itemUrl}
              />
            );
          })}
        </div>
        <SidebarContainer />
      </div>
    </div>
  );
};

export default SearchWrap;
