import {makeActionCreator} from '../Utility/makeActionCreator';
export const REMOVE_ITEM_FROM_CART = 'remove_item_from_cart';
export const removeItemFromCart = makeActionCreator(REMOVE_ITEM_FROM_CART,'pid');