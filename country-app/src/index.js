import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import DevTools from './DevTools'
import { getCountries } from './actions/actions-countries';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
