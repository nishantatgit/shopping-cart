import {makeActionCreator} from '../Utility/makeActionCreator';

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const setProductList = makeActionCreator(SET_PRODUCT_LIST,"productList");
