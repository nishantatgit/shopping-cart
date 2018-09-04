import React from 'react';
import {connect} from 'react-redux';
import {ProductCardDisplay} from './ProductCardDisplay.jsx';

class ProductCardContainer extends React.Component{
    render(){
        let {product,addToCartHandler} = this.props;
        return <ProductCardDisplay product={product} addToCartHandler={addToCartHandler.bind(undefined,product)}/>;
    }
}
export  default connect()(ProductCardContainer);