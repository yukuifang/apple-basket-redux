/**
 * Created by fangyukui on 2018/1/14.
 */

import  React,{ Component } from  'react'
import  ReactDOM from  'react-dom'
import  {Provider} from  'react-redux'
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import  AppleBusket from  './containers/appleBasket'
import rootReducer from './reducers';


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <div className="box">
        <Provider store={store}>
            <AppleBusket />
        </Provider>,
    </div>,
    document.getElementById('root')
)


