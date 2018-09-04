import {put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {GET_ITEM_FROM_CART , getItemFromCart} from '../Actions/getItemFromCart';
import {setItemToCart} from '../Actions/setItemToCart';

export  function * fetchCartDetailsSaga(){
    console.log('spinning fetchCartDetailSaga');
    yield takeLatest(GET_ITEM_FROM_CART,getCartDetailsSaga);
}

function * getCartDetailsSaga(action){
    let response = yield axios.get('/cart/usr-00001');
    console.log('get cart detail saga response ', response);
    yield put(setItemToCart(JSON.parse(response.data)));
}
