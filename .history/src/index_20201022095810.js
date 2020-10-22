import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import combineReducers from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(combineReducers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
