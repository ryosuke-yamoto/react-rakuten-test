import { combineReducers, Reducer } from 'redux';
import * as Model from '../services/Models';
import { AxiosError } from 'axios';
import { ActionType } from '../action/goodsAction';
import {
  GET_GOODS,
  GET_RANKING_GOODS,
  GET_RANKING_SORT_AGE,
} from '../action/goodsActionConstant';

export interface GoodsState {
  goods: Model.Goods[];
  rankingGoods: Model.Goods[];
  error?: AxiosError | null;
}

export interface SortState {
  age: string;
}

export const initialState = {
  goods: [],
  rankingGoods: [],
};

export const sortInitialState = {
  age: '10',
};

export const GoodsReducer: Reducer<GoodsState, ActionType> = (
  state: GoodsState = initialState,
  action: ActionType
): GoodsState => {
  switch (action.type) {
    case GET_GOODS:
      return {
        ...state,
        goods: action.payload.goods,
      };
    case GET_RANKING_GOODS:
      return {
        ...state,
        rankingGoods: action.payload.rankingGoods,
      };
    default:
      return state;
  }
};

export const RankingSortReducer: Reducer<SortState, ActionType> = (
  state: SortState = sortInitialState,
  action: ActionType
): SortState => {
  switch (action.type) {
    case GET_RANKING_SORT_AGE:
      return {
        ...state,
        age: action.payload.age,
      };
    default:
      return {
        ...state,
        age: '',
      };
  }
};

const reducer = combineReducers({
  GoodsReducer,
  RankingSortReducer,
});

export default reducer;
