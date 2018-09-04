import {makeActionCreator} from '../Utility/makeActionCreator';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const addItemToCart = makeActionCreator(ADD_ITEM_TO_CART,'cart_detail');