import { configureStore, combineSlices, Action, ThunkAction } from '@reduxjs/toolkit'
import { userSlice } from '../_features/userSlice';
import { postsSlice } from '../_features/postsSlice';

const rootReducer = combineSlices(
  userSlice,
  postsSlice
);

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    // middleware: (getDefaultMiddleware) => {
    //   return getDefaultMiddleware().concat(quotesApiSlice.middleware);
    // },
    // DevTools are automatically enabled in development
    // devTools: process.env.NODE_ENV !== 'production'
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;