import { put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { GET_PRODUCT_LIST, getProductList } from './../Actions/getProductList';
import { setProductList } from './../Actions/setProductList'; 

export function * fetchProductListSaga(){
    yield takeLatest('GET_PRODUCT_LIST',getProductListSaga);
}

function * getProductListSaga(){
    const response = yield axios.get('/products');
    //console.log('response -> ',JSON.parse(response.data));
    yield put(setProductList(JSON.parse(response.data)));
}