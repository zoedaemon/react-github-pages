import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { applyMiddleware,createStore} from 'redux'
import ReduxThunk from 'redux-thunk'
import Reducers from './reducers'


import './support/fontawesome-free/css/fontawesome.min.css'
import './support/fontawesome-free/css/all.min.css';

import 'core-js/es/map';
import 'core-js/es/set';

const globalState = createStore(Reducers,{},applyMiddleware(ReduxThunk))

ReactDOM.render(
<Provider store={globalState}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();