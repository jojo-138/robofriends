import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import type { AppStore } from './store'
import robotsReducer from './features/fetchRobots/robotsSlice';
import searchFieldReducer from './features/setSearchField/searchField';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: AppStore;
};

export function renderWithProviders(
  ui: React.ReactElement,
  {
    store = configureStore({ reducer: { searchField: searchFieldReducer, robots: robotsReducer } }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  };
  
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions })};
};
