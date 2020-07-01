import { GET_GOODS, GET_RANKING_GOODS } from './goodsActionConstant';
import { Goods } from '../services/Models';

export const getGoods = (goods: Goods[]) => ({
  type: GET_GOODS as typeof GET_GOODS,
  payload: {
    goods,
  },
});

export const getRankingGoods = (rankingGoods: Goods[]) => ({
  type: GET_RANKING_GOODS as typeof GET_RANKING_GOODS,
  payload: {
    rankingGoods,
  },
});

export type ActionType =
  | ReturnType<typeof getGoods>
  | ReturnType<typeof getRankingGoods>;
