import {makeActionCreator} from '../Utility/makeActionCreator'; 
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
export const setCurrentCategory = makeActionCreator(SET_CURRENT_CATEGORY,'current_category_id');
