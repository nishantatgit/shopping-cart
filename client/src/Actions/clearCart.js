import {makeActionCreator} from '../Utility/makeActionCreator';

export const CLEAR_CART = 'CLEAR_CART';
export const clearCart = makeActionCreator(CLEAR_CART);