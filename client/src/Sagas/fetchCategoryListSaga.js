import { put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {GET_CATEGORY_LIST} from '../Actions/getCategoryList';
import {setCategoryList} from '../Actions/setCategoryList';

export function * fetchCategoryListSaga(){
    yield takeLatest(GET_CATEGORY_LIST,getCategoryListSaga);
}

function * getCategoryListSaga(){
    const response = yield axios.get('/category');
    yield put(setCategoryList(JSON.parse(response.data)));
}