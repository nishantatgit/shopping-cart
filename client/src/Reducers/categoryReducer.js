import {SET_CATEGORY_LIST} from '../Actions/setCategoryList';
export const categoryReducer = ( state = [], action) => {
    switch(action.type){
        case SET_CATEGORY_LIST : {
            state = action.categoryList.slice();
            return state;
        }
        default : 
            return state;
    }
}

window.reducer = categoryReducer;