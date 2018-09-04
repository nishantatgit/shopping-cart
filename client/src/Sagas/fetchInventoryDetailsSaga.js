import { put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { getInventory } from './../Actions/getInventory';
import { setInventory } from './../Actions/setInventory'; 

export function * fetchInventorySaga(){
    yield takeLatest('GET_PRODUCT_LIST',getInventorySaga);
}

function * getInventorySaga(){
    const response = yield axios.get('/inventory');
    //console.log('response -> ',JSON.parse(response.data));
    yield put(setInventory(JSON.parse(response.data)));
}