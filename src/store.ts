import { configureStore } from '@reduxjs/toolkit';
import searchFieldReducer from './features/setSearchField/searchField';
import robotsReducer from './features/fetchRobots/robotsSlice';

export const store = configureStore({
  reducer: {
    searchField: searchFieldReducer,
    robots: robotsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
