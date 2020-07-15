import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import CategoryItems from '../pages/CategoryItems';
import { connect } from 'react-redux';
import { getGoods } from '../action/goodsAction';
import { Goods } from '../services/Models';
import { getRakutenAPI } from '../axios/index';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { State } from '../reducer/reducer';

type Param = {
  categoryId: string;
};

type CategoryItemsContainerProps = DispatchProp & StateProp;
// {
//   getGoods: (goods: Goods[]) => void;
//   goods: Goods[];
// }

interface DispatchProp {
  getGoods: (goods: Goods[]) => void;
}

interface StateProp {
  goods: Goods[];
}

const CategoryItemsContainer: React.FC<CategoryItemsContainerProps> = ({
  getGoods,
  goods,
}) => {
  const param: Param = useParams();

  const getGoodsWithAPI = async () => {
    const RakutenAPIData = await getRakutenAPI(param.categoryId);
    getGoods(RakutenAPIData);
  };

  useEffect(() => {
    getGoodsWithAPI();
  }, [param.categoryId]);

  return <CategoryItems goods={goods} />;
};

const mapStateToProps = (state: State): StateProp => {
  return {
    goods: state.Goods.goods,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProp => {
  return {
    getGoods: (goods: Goods[]) => dispatch(getGoods(goods)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItemsContainer);
