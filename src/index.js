import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from  'redux-thunk';
import { Provider } from 'react-redux'
import AssetReducer from './reducers/asset'

import './index.css';
import Balancesheet from './containers/Balancesheet'

const store = createStore(
    AssetReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Balancesheet />
    </Provider>
    ,
    document.getElementById('root'));
