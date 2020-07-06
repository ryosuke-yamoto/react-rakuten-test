import {
  GET_GOODS,
  GET_RANKING_GOODS,
  GET_RANKING_SORT_AGE,
} from './goodsActionConstant';
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

export const getRankingSortAge = (age: string) => ({
  type: GET_RANKING_SORT_AGE as typeof GET_RANKING_SORT_AGE,
  payload: {
    age,
  },
});

export type ActionType =
  | ReturnType<typeof getGoods>
  | ReturnType<typeof getRankingGoods>
  | ReturnType<typeof getRankingSortAge>;
