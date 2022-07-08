import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App/App';
import { searchRobots, getRobots } from './reducers/reducers';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const rootReducer = combineReducers({
  searchField: searchRobots,
  robots: getRobots
});
const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();