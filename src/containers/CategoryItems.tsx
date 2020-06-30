import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import CategoryItems from '../pages/CategoryItems';
import { connect } from 'react-redux';
import { GoodsState } from '../reducer/reducer';
import { getGoods } from '../action/goodsAction';
import { Goods } from '../services/Models';
import { getRakutenAPI } from '../axios/index';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

type Param = {
  categoryId: string;
};

interface CategoryItemsContainerProps {
  getGoods: (goods: Goods[]) => void;
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

const mapStateToProps = (state: GoodsState) => {
  return {
    goods: state.goods,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getGoods: (goods: Goods[]) => dispatch(getGoods(goods)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItemsContainer);
