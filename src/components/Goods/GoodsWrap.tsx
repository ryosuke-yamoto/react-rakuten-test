import React from 'react';
import GoodsList from './GoodsList';
import GoodsTitle from './GoodsTitle';
import { Goods } from '../../services/Models';
import SidebarContainer from '../SIidebar/SidebarContainer';
import './GoodsWrap.css';

interface GoodsWrapProps {
  goods: Goods[];
}

const GoodsWrap: React.FC<GoodsWrapProps> = ({ goods }) => {
  return (
    <div className="goodsWrap">
      <GoodsTitle />
      <div className="flexWrap">
        <div className="goods-list-wrap">
          {goods.map((goodsItem) => {
            return (
              <GoodsList
                key={goodsItem.Item.itemName}
                itemName={goodsItem.Item.itemName}
                src={goodsItem.Item.mediumImageUrls[0].imageUrl}
                caption={goodsItem.Item.itemCaption}
                price={goodsItem.Item.itemPrice}
                url={goodsItem.Item.itemUrl}
              />
            );
          })}
        </div>
        <SidebarContainer />
      </div>
    </div>
  );
};

export default GoodsWrap;
