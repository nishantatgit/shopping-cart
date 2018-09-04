import { put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { REMOVE_ITEM_FROM_CART, removeItemFromCart } from '../Actions/removeItemFromCart';
import { DELETE_CART_ITEM_FROM_STORE, deleteCartItemFromStore } from '../Actions/deleteCartItemFromStore';

export function * removeItemFromCartSaga(){
    yield takeLatest(REMOVE_ITEM_FROM_CART, makeDeleteCallToCartSaga);
}

function * makeDeleteCallToCartSaga(action){
    console.log('makeDeleteCallToCartSaga -> ', action);
    let response = yield axios.delete(`/cart/${action.pid}`);
    console.log('response data ---- ',response.data);
    console.log('get cart detail saga response ', response);
    yield put(deleteCartItemFromStore(action.pid,response.data.noOfItemsRemoved));
}