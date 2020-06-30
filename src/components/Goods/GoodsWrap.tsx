import React from 'react';
import GoodsList from './GoodsList';
import GoodsTitle from './GoodsTitle';
import { Goods } from '../../services/Models';

const goodsWrap = {
  backgroundColor: '#fff',
  padding: '20px',
};

interface GoodsWrapProps {
  goods: Goods[];
}

const GoodsWrap: React.FC<GoodsWrapProps> = ({ goods }) => {
  return (
    <div style={goodsWrap}>
      <GoodsTitle />
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
  );
};

export default GoodsWrap;
