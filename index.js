import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './components/Routes.jsx';

// main app
const root = document.getElementById('app');

// const store = configureStore();

ReactDOM.render(
  // <Provider store={store}>
    <Routes />,
  // </Provider>,
  root
);
