import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import persistedReducer, { GoodsReducer } from './reducer/reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const store: any = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);
const persistor = persistStore(store);
// persistor.purge();
//これを実行すると、Storageに保存された情報がクリアされる
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
