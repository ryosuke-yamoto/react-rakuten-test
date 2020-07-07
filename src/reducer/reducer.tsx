import { combineReducers, Reducer } from 'redux';
import * as Model from '../services/Models';
import { AxiosError } from 'axios';
import { ActionType } from '../action/goodsAction';
import {
  GET_GOODS,
  GET_RANKING_GOODS,
  GET_RANKING_SORT_AGE,
  LOGGED_IN,
} from '../action/goodsActionConstant';

export interface GoodsState {
  Goods: {
    goods: Model.Goods[];
    rankingGoods: Model.Goods[];
    error?: AxiosError | null;
  };
}

interface GoodStateType {
  goods: Model.Goods[];
  rankingGoods: Model.Goods[];
  error?: AxiosError | null;
}

export const initialState = {
  goods: [],
  rankingGoods: [],
};

export const GoodsReducer: Reducer<GoodStateType, ActionType> = (
  state: GoodStateType = initialState,
  action: ActionType
): GoodStateType => {
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

export interface SortState {
  rankingSort: {
    age: string;
  };
}

interface SortStateType {
  age: string;
}

export const sortInitialState = {
  age: '10',
};

export const RankingSortReducer: Reducer<SortStateType, ActionType> = (
  state: SortStateType = sortInitialState,
  action: ActionType
): SortStateType => {
  switch (action.type) {
    case GET_RANKING_SORT_AGE:
      return {
        ...state,
        age: action.payload.age,
      };
    default:
      return state;
  }
};

export interface LoggedState {
  logIn: boolean;
}

export const LoggedInInitialState = {
  logIn: false,
};

export const LoggedInReducer: Reducer<LoggedState, ActionType> = (
  state: LoggedState = LoggedInInitialState,
  action: ActionType
): LoggedState => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        logIn: !action.payload.logIn,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  Goods: GoodsReducer,
  rankingSort: RankingSortReducer,
  logged: LoggedInReducer,
});

export default reducer;
