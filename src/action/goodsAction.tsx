import { GET_GOODS } from './goodsActionConstant';
import { Goods } from '../services/Models';

export const getGoods = (goods: Goods[]) => ({
  type: GET_GOODS as typeof GET_GOODS,
  payload: {
    goods,
  },
});

export type ActionType = ReturnType<typeof getGoods>;
