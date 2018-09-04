import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {fetchProductListSaga} from '../Sagas/fetchProductListSaga';
import {fetchCategoryListSaga} from '../Sagas/fetchCategoryListSaga';
import {fetchInventorySaga}  from '../Sagas/fetchInventoryDetailsSaga';
import {addItemToCartSaga} from '../Sagas/addItemToCartSaga';
import {fetchCartDetailsSaga} from '../Sagas/fetchCartDetailsSaga';
import {clearCartSaga} from '../Sagas/clearCartSaga';
import {removeItemFromCartSaga} from '../Sagas/removeItemFromCartSaga';
import {productDetailsReducer} from '../Reducers/productDetailsReducer';
import {categoryReducer} from '../Reducers/categoryReducer';
import {cartDetailsReducer} from '../Reducers/cartDetailsReducer';
import {noOfItemsReducer} from '../Reducers/noOfItemsReducer';
import {currentCategoryReducer} from '../Reducers/currentCategoryReducer';

const sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers({
    productList : productDetailsReducer,
    categoryList : categoryReducer,
    cartDetailList : cartDetailsReducer,
    noOfItemsInCart : noOfItemsReducer,
    currentCategory : currentCategoryReducer
});

const store =  createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchProductListSaga);
sagaMiddleware.run(fetchCategoryListSaga);
sagaMiddleware.run(addItemToCartSaga);
sagaMiddleware.run(fetchCartDetailsSaga);
sagaMiddleware.run(clearCartSaga);
sagaMiddleware.run(removeItemFromCartSaga);

export default store;
