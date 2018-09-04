import {SET_ITEM_TO_CART} from '../Actions/setItemToCart'; 
import {CLEAR_CART} from '../Actions/clearCart';
import {DELETE_CART_ITEM_FROM_STORE} from '../Actions/deleteCartItemFromStore';

export const noOfItemsReducer = ( state = 0 , action ) => {
    switch(action.type){
        case SET_ITEM_TO_CART : {
            state = state + action.cart_detail.length
            return state;
        }
        case CLEAR_CART : {
            state = 0;
            return state;
        }
        case DELETE_CART_ITEM_FROM_STORE : {
            state -= action.noOfItemsRemoved;
            return state;
        }
        default : 
            return state
    }
}