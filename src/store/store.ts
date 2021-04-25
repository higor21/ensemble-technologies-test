import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import feedReducer from 'store/feed/slice';
import authReducer from 'store/auth/slice';

const rootReducer = combineReducers({
  feed: feedReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  whitelist: ['auth'],
  storage,
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;