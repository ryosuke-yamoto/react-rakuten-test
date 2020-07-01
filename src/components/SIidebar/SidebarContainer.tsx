import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { GoodsState } from '../../reducer/reducer';
import { getRankingGoods } from '../../action/goodsAction';
import { Goods } from '../../services/Models';
import { getRankingRakutenAPI } from '../../axios/index';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

export type Param = {
  categoryId: string;
  keyword: string;
};

interface SidebarContainerContainerProps {
  getRankingGoods: (rankingGoods: Goods[]) => void;
  rankingGoods: Goods[];
}

const mapStateToProps = (state: GoodsState) => {
  return {
    rankingGoods: state.rankingGoods,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getRankingGoods: (rankingGoods: Goods[]) =>
      dispatch(getRankingGoods(rankingGoods)),
  };
};

const SidebarContainer: React.FC<SidebarContainerContainerProps> = ({
  getRankingGoods,
  rankingGoods,
}) => {
  const param: Param = useParams();
  console.log(param);

  const getRankingGoodsWithAPI = async () => {
    if (param.keyword) {
      const RakutenAPIData = await getRankingRakutenAPI('0');
      getRankingGoods(RakutenAPIData);
    } else {
      const RakutenAPIData = await getRankingRakutenAPI(param.categoryId);
      getRankingGoods(RakutenAPIData);
    }
  };

  useEffect(() => {
    getRankingGoodsWithAPI();
  }, [param.categoryId]);
  return <Sidebar rankingGoods={rankingGoods} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
