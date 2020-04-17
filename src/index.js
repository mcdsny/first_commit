import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// 開発用ツール（chromeを通してstateやactionの監視ができるようになります）
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import rootReducer from "./reducers";

// redux-thunk等のミドルウェアを使用する場合はここに記載
const middleWares = [];
// 開発用ツールの設定
const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleWares))
    : applyMiddleware(...middleWares);
// Storeを作成
const store = createStore(rootReducer, enhancer);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
