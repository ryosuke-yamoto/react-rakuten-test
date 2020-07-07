import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import SearchGoods from '../pages/SearchGoods';
import { connect } from 'react-redux';
import { GoodsState } from '../reducer/reducer';
import { getGoods } from '../action/goodsAction';
import { Goods } from '../services/Models';
import { getSearchedRakutenAPI } from '../axios/index';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

type Param = {
  keyword: string;
};

interface SearchGoodsContainerProps {
  getGoods: (searchedGoods: Goods[]) => void;
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

const mapStateToProps = (state: GoodsState) => {
  return {
    searchedGoods: state.Goods.goods,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getGoods: (searchedGoods: Goods[]) => dispatch(getGoods(searchedGoods)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchGoodsContainer);
