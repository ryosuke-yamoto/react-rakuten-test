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
      <GoodsTitle goods={goods} />
      {goods.map((goodsItem) => {
        console.log(goodsItem.Item.itemName);
        return (
          <GoodsList
            key={goodsItem.Item.itemName}
            itemName={goodsItem.Item.itemName}
            src={goodsItem.Item.smallImageUrls[0].imageUrl}
            caption={goodsItem.Item.itemCaption}
            price={goodsItem.Item.itemPrice}
          />
        );
      })}
    </div>
  );
};

export default GoodsWrap;
