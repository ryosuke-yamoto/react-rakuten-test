import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { State } from '../../reducer/reducer';
import { getRankingGoods } from '../../action/goodsAction';
import { Goods } from '../../services/Models';
import { getRankingRakutenAPI } from '../../axios/index';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

export type Param = {
  categoryId: string;
  keyword: string;
};

type SidebarContainerContainerProps = DispatchProp & StateProps;
// getRankingGoods: (rankingGoods: Goods[]) => void;
// rankingGoods: Goods[];
// age: string;

interface DispatchProp {
  getRankingGoods: (rankingGoods: Goods[]) => void;
}

interface StateProps {
  rankingGoods: Goods[];
  age: string;
}
const mapStateToProps = (state: State): StateProps => {
  return {
    rankingGoods: state.Goods.rankingGoods,
    age: state.rankingSort.age,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProp => {
  return {
    getRankingGoods: (rankingGoods: Goods[]) =>
      dispatch(getRankingGoods(rankingGoods)),
  };
};

const SidebarContainer: React.FC<SidebarContainerContainerProps> = ({
  getRankingGoods,
  rankingGoods,
  age,
}) => {
  const param: Param = useParams();

  const getRankingGoodsWithAPI = async () => {
    if (age) {
      const RakutenAPIData = await getRankingRakutenAPI(age);
      getRankingGoods(RakutenAPIData);
    } else {
      const RakutenAPIData = await getRankingRakutenAPI('20');
      getRankingGoods(RakutenAPIData);
    }
  };

  useEffect(() => {
    getRankingGoodsWithAPI();
  }, [param.categoryId]);
  return <Sidebar rankingGoods={rankingGoods} age={age} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
