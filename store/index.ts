import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./rootSaga";

import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";

import { combineReducers } from "redux";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import articles from "./reducer/articles";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    articles,
  })
);

export const store = configureStore({
  middleware: [sagaMiddleware],
  reducer: persistedReducer,
});

sagaMiddleware.run(rootSaga);

export const { dispatch, getState } = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
