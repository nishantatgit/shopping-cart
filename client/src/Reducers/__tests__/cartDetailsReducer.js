import React from 'react';
import {SET_ITEM_TO_CART} from '../../Actions/setItemToCart'; 
import {CLEAR_CART} from '../../Actions/clearCart';
import {DELETE_CART_ITEM_FROM_STORE} from '../../Actions/deleteCartItemFromStore';
import {cartDetailsReducer} from '../cartDetailsReducer';
describe('cart detail reducer', () => {
    
    it('should return the initial state ', () => {
        expect(cartDetailsReducer(undefined, {})).toEqual([]);
    });

    it('should handle SET_ITEM_TO_CART', () => {
        const cart_detail = {
            pid :  "p-60",
            pname :  "Samosa",
            price :  0.5,
            pcatid :  "pcat-1"
         };
        expect(cartDetailsReducer([{ pid : "p-01",
                                    pname: "Test-1",
                                    price : "0.77",
                                    pcatid : "pcat-test"}],
                                    {
                                        type : SET_ITEM_TO_CART,
                                        cart_detail
                                    })).toEqual([{ pid : "p-01",
                                    pname: "Test-1",
                                    price : "0.77",
                                    pcatid : "pcat-test"},cart_detail]);
        });

    it('should handle CLEAR_CART', () => {
        const cart_detail = {
            pid :  "p-60",
            pname :  "Samosa",
            price :  0.5,
            pcatid :  "pcat-1"
         };
         expect(cartDetailsReducer([cart_detail], {
             type : CLEAR_CART
         })).toEqual([]);
    });

    it('should handle DELETE_CART_ITEM_FROM_STORE', () => {
         expect(cartDetailsReducer([{pid : "p-60"}, {pid : "test"},{pid : "p-60"}],{
             type : DELETE_CART_ITEM_FROM_STORE,
             pid : "p-60"
         })).toEqual([{pid : "test"}]);
    });

    it('should handle DELETE_CART_ITEM_FROM_STORE', () => {
         expect(cartDetailsReducer([{pid : "p-60"}, {pid : "test"},{pid : "p-60"}],{
             type : DELETE_CART_ITEM_FROM_STORE,
             pid : ""
         })).toEqual([{pid : "p-60"}, {pid : "test"},{pid : "p-60"}]);
    });

    it('should handle DELETE_CART_ITEM_FROM_STORE', () => {
         expect(cartDetailsReducer([{pid : "p-60"}, {pid : "test"},{pid : "p-60"}],{
             type : DELETE_CART_ITEM_FROM_STORE,
             pid : undefined
         })).toEqual([{pid : "p-60"}, {pid : "test"},{pid : "p-60"}]);
    });

    it('should handle DELETE_CART_ITEM_FROM_STORE', () => {
         expect(cartDetailsReducer([{pid : "p-60"}, {pid : "test"},{pid : "p-60"}],{
             type : DELETE_CART_ITEM_FROM_STORE,
             pid : "test"
         })).toEqual([{pid : "p-60"},{pid : "p-60"}]);
    });
});