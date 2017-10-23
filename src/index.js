import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { reduxFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';

import routes from './routes';
import reducers from './reducers';

// db is set to read-only, this is not a security concern
const config = {
  apiKey: 'AIzaSyBGu86vWURo99ghkzR34f0szRWNDDhAzSA',
  authDomain: 'porfolio-f2f05.firebaseapp.com',
  databaseURL: 'https://porfolio-f2f05.firebaseio.com/',
  storageBucket: 'porfolio-f2f05.appspot.com',
};

const createStoreWithFirebase = compose(
  applyMiddleware(thunk),
  reduxFirebase(config),
)(createStore);

ReactDOM.render(
	<Provider store={ createStoreWithFirebase(reducers) }>
		<Router history={ browserHistory } routes={ routes } />
	</Provider>,
  document.getElementById('root')
);
