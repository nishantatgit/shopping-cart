import {SET_ITEM_TO_CART} from '../Actions/setItemToCart'; 
import {CLEAR_CART} from '../Actions/clearCart';
import {DELETE_CART_ITEM_FROM_STORE} from '../Actions/deleteCartItemFromStore';
export const cartDetailsReducer = ( state = [], action) => {
    switch(action.type){
        case SET_ITEM_TO_CART : {
            state = state.concat(action.cart_detail).slice();
            return state; 
        }
        case CLEAR_CART : {
            state = [];
            return state;
        }
        case DELETE_CART_ITEM_FROM_STORE : {
            let count = 0;
            for(let idx = 0 ; idx < state.length; idx ++){
                if(action.pid === state[idx].pid){
                    count ++;
                }
            }
            while(count--){
                let position = -1;
                for(let idx = 0 ; idx < state.length; idx ++){
                    if(action.pid === state[idx].pid){
                        position = idx;
                        break;    
                    }
                }
                state.splice(position,1);
            }
            return state.slice();
        }
        default : 
            return state;
    }
}