export const productDetailsReducer = ( state = [], action) => {
    switch(action.type){
        case 'SET_PRODUCT_LIST' : 
        {
            state = action.productList.slice();
            return state;
        }
        default : 
            return state;
    }
}