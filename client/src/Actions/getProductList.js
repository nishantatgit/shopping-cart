import { makeActionCreator } from '../Utility/makeActionCreator';
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const getProductList = makeActionCreator(GET_PRODUCT_LIST,"pcatid");