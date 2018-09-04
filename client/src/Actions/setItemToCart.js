import {makeActionCreator} from '../Utility/makeActionCreator';
export const SET_ITEM_TO_CART = 'SET_ITEM_TO_CART';
export const setItemToCart = makeActionCreator(SET_ITEM_TO_CART,'cart_detail');