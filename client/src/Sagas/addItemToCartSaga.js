import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {ADD_ITEM_TO_CART} from '../Actions/addItemToCart';
import {addItemToCart} from '../Actions/addItemToCart';
import {setItemToCart} from '../Actions/setItemToCart';

export function * addItemToCartSaga(){
    yield takeLatest(ADD_ITEM_TO_CART,postItemToCartSaga);
}

function * postItemToCartSaga(action){
    const response = yield axios.post('/cart',action['cart_detail']);
    if(response.status === 200){
        yield put(setItemToCart([action['cart_detail']]));
    }
}

