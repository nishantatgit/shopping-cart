import {makeActionCreator} from '../Utility/makeActionCreator';
export const DELETE_CART_ITEM_FROM_STORE = 'delete_cart_item_from_store';
export const deleteCartItemFromStore = makeActionCreator(DELETE_CART_ITEM_FROM_STORE,'pid','noOfItemsRemoved');