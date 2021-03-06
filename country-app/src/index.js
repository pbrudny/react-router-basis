import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { getCountries } from './actions/actions-countries';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './presentational/country.css';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
