import { combineReducers, Reducer } from 'redux';
import * as Model from '../services/Models';
import { AxiosError } from 'axios';
import { ActionType } from '../action/goodsAction';
import { GET_GOODS } from '../action/goodsActionConstant';

export interface GoodsState {
  goods: Model.Goods[];
  error?: AxiosError | null;
}

export const initialState = {
  goods: [],
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
    default:
      return state;
  }
};
