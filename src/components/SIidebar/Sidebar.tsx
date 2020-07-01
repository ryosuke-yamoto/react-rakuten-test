import React from 'react';
import './Sidebar.css';
import { Goods } from '../../services/Models';
import { useParams } from 'react-router-dom';
import { Param } from './SidebarContainer';

interface SidebarProps {
  rankingGoods: Goods[];
}

const Sidebar: React.FC<SidebarProps> = ({ rankingGoods }) => {
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
    switch (params.categoryId) {
      case '566382':
        return '「おもちゃ」';
      case '101070':
        return '「スポーツ・アウトドア」';
      case '562637':
        return '「家電」';
      case '551167':
        return '「スイーツ・お菓子」';
      case '200162':
        return '「本・雑誌・コミック」';
      case '100026':
        return '「パソコン・周辺機器」';
      case '558929':
        return '「腕時計」';
      default:
        return '総合';
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
