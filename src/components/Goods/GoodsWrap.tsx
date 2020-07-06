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
                key={goodsItem.Item.itemCode}
                itemName={goodsItem.Item.itemName}
                src={goodsItem.Item.mediumImageUrls}
                caption={goodsItem.Item.itemCaption}
                price={goodsItem.Item.itemPrice}
                url={goodsItem.Item.itemUrl}
                // {...props}
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
