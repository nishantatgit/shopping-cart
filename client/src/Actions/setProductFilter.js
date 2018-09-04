import {makeActionCreator} from '../Utility/makeActionCreator';

export const SET_PRODUCT_FILTER = "SET_PRODUCT_FILTER";
export const setProductFilter = makeActionCreator(SET_PRODUCT_FILTER,"pcatid");