import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'
// apply middleware 
const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
    <Provider store={storeWithMiddleware(reducers)}> 
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
