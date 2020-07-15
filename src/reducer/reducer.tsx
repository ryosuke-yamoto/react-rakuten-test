import { combineReducers, Reducer } from 'redux';
import * as Model from '../services/Models';
import { AxiosError } from 'axios';
import { ActionType } from '../action/goodsAction';
import {
  GET_GOODS,
  GET_RANKING_GOODS,
  GET_RANKING_SORT_AGE,
  LOGGED_IN,
  SIGN_UP,
  LOGGED_IN_USER,
} from '../action/goodsActionConstant';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { User } from '../services/Models';

export interface State {
  Goods: {
    goods: Model.Goods[];
    rankingGoods: Model.Goods[];
  };
  rankingSort: {
    age: string;
  };
  logged: {
    login: boolean;
    signup: boolean;
  };
  users: {
    user: User;
  };
  _persist: {
    version: number;
    rehydrated: boolean;
  };
}

// export interface GoodsState {
//   Goods: {
//     goods: Model.Goods[];
//     rankingGoods: Model.Goods[];
//     error?: AxiosError | null;
//   };
// }

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
  login: boolean;
  signup: boolean;
}

export const LoggedInInitialState = {
  login: false,
  signup: false,
};

export const LoggedInReducer: Reducer<LoggedState, ActionType> = (
  state: LoggedState = LoggedInInitialState,
  action: ActionType
): LoggedState => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        login: !action.payload.login,
      };
    case SIGN_UP:
      return {
        ...state,
        signup: !action.payload.signup,
      };
    default:
      return state;
  }
};

export interface UserState {
  user: User;
}

export const UserInitialState = {
  user: {
    name: '',
    email: '',
    uid: '',
    age: '',
  },
};

export const UserReducer: Reducer<UserState, ActionType> = (
  state: UserState = UserInitialState,
  action: ActionType
): UserState => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  Goods: GoodsReducer,
  rankingSort: RankingSortReducer,
  logged: LoggedInReducer,
  users: UserReducer,
});

// export default reducer;

//stateの永続化
// 永続化の設定
const persistConfig = {
  key: 'root', // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
  whitelist: ['logged'], // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
