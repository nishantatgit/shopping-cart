import {addItemToCart, ADD_ITEM_TO_CART} from '../addItemToCart';
describe('add item to cart action', () => {
    it('should create an action to add item to cart', () => {
        const cart_detail = {
           pid :  "p-60",
           pname :  "Samosa",
           price :  0.5,
           pcatid :  "pcat-1"
        };
        const expectedAction = {
            type : ADD_ITEM_TO_CART,
            cart_detail 
        };
        expect(addItemToCart(cart_detail)).toEqual(expectedAction);
    });
});
