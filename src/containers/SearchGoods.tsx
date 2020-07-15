import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import SearchGoods from '../pages/SearchGoods';
import { connect } from 'react-redux';
import { getGoods } from '../action/goodsAction';
import { Goods } from '../services/Models';
import { getSearchedRakutenAPI } from '../axios/index';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { State } from '../reducer/reducer';

type Param = {
  keyword: string;
};

type SearchGoodsContainerProps = DispatchProp & StateProp;
// {
//   getGoods: (searchedGoods: Goods[]) => void;
//   searchedGoods: Goods[];
// }

interface DispatchProp {
  getGoods: (searchedGoods: Goods[]) => void;
}

interface StateProp {
  searchedGoods: Goods[];
}

const SearchGoodsContainer: React.FC<SearchGoodsContainerProps> = ({
  getGoods,
  searchedGoods,
}) => {
  const param: Param = useParams();

  const getGoodsWithAPI = async () => {
    const RakutenAPIData = await getSearchedRakutenAPI(param.keyword);
    getGoods(RakutenAPIData);
  };

  useEffect(() => {
    getGoodsWithAPI();
  }, [param.keyword]);

  return <SearchGoods searchedGoods={searchedGoods} />;
};

const mapStateToProps = (state: State): StateProp => {
  return {
    searchedGoods: state.Goods.goods,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProp => {
  return {
    getGoods: (searchedGoods: Goods[]) => dispatch(getGoods(searchedGoods)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchGoodsContainer);
