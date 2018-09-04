import {put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {CLEAR_CART, clearCart } from '../Actions/clearCart';

export  function * clearCartSaga(){
   yield takeLatest(CLEAR_CART,deleteAllItemsSaga);
}

function * deleteAllItemsSaga(){
   const response =  axios.delete('/cart');
   if(response.status === 200){
     yield put(clearCart());
   }
}