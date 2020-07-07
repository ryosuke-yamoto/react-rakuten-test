import React from 'react';
import './Sidebar.css';
import { Goods } from '../../services/Models';
import { useParams } from 'react-router-dom';
import { Param } from './SidebarContainer';

interface SidebarProps {
  rankingGoods: Goods[];
  age: string;
}

const Sidebar: React.FC<SidebarProps> = ({ rankingGoods, age }) => {
  const params: Param = useParams();

  const titleUnderline = () => {
    switch (params.categoryId) {
      case '566382':
        return { borderBottom: 'solid 2px #136FFF' };
        break;
      case '101070':
        return { borderBottom: 'solid 2px #C0C0C0' };
        break;
      case '562637':
        return { borderBottom: 'solid 2px #00DD00' };
        break;
      case '551167':
        return { borderBottom: 'solid 2px #FFD700' };
        break;
      case '200162':
        return { borderBottom: 'solid 2px #DC143C' };
        break;
      case '100026':
        return { borderBottom: 'solid 2px #00CED1' };
        break;
      case '558929':
        return { borderBottom: 'solid 2px #333333' };
        break;
      default:
        return { borderBottom: 'solid 2px #333333' };
        break;
    }
  };
  const titleStyle = titleUnderline();
  const titleMake = () => {
    switch (age) {
      case '10':
        return '「10代」';
      case '20':
        return '「20代」';
      case '30':
        return '「30代」';
      case '40':
        return '「40代」';
      case '50':
        return '「50代」';
      default:
        return '「20代」';
    }
  };
  const title = titleMake();
  return (
    <div className="sidebar-wrap">
      <div>
        <h3 style={titleStyle}>{`${title}`}</h3>
        <h3>商品ランキング</h3>
      </div>
      <div className="ranking-list-wrap">
        {rankingGoods.map((rankingGoodsItem) => {
          return (
            <div
              key={rankingGoodsItem.Item.itemCode}
              className="ranking-item-wrap"
            >
              <a
                className="ranking-item-title"
                href={rankingGoodsItem.Item.itemUrl}
              >
                {rankingGoodsItem.Item.itemName}
              </a>
              <img
                src={rankingGoodsItem.Item.mediumImageUrls[0].imageUrl}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
