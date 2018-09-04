import {SET_CURRENT_CATEGORY} from '../Actions/setCurrentCatgory';
export const currentCategoryReducer = ( state = 'SEE_ALL', action) => {
    console.log('current category type action -> ', action);
    switch(action.type){
        case SET_CURRENT_CATEGORY : {
            state = action.current_category_id;
            return state;
        }
        default : {
            return state;
        }
    }
}