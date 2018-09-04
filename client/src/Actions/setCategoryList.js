import {makeActionCreator} from '../Utility/makeActionCreator';

export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';
export const setCategoryList = makeActionCreator(SET_CATEGORY_LIST,'categoryList');
