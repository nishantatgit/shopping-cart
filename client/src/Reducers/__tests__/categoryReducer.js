import React from 'react';
import {categoryReducer} from '../categoryReducer';
import SET_CATEGORY_LIST from '../../Actions/setCategoryList';
import setCategoryList from '../../Actions/setCategoryList';
describe('category reducer', () => {
    
    it('should return initial state', () => {
        expect(categoryReducer(undefined,{})).toEqual([]);
    });

    it('should not modify state', () => {
        const state = [{}];
        expect(categoryReducer(state,{})).toEqual(state);
    });

    it('should handle SET_CATEGORY_LIST', () => {
        expect(categoryReducer(undefined,{ type : 'SET_CATEGORY_LIST' , categoryList : [{ x : 'abc'}]})).toEqual([{ x : 'abc'}]);
    });

});