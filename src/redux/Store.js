import {combineReducers, createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {productDetailReducer, productReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const reducer=combineReducers({
    getProducts:productReducer,
    getProductDetails:productDetailReducer,
    cart:cartReducer,
})
const middleware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;