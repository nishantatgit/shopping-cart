import React from 'react';
import {Link} from 'react-router-dom';
import ProductCardContainer from '../ProductCard/ProductCardContainer';

export const ProductListDisplay = props => {
    const getProducts = (props) => {
        let productList = props.products;
        if(productList.length){
            let {pcatid} = props , {origin} = window.location;
            if(pcatid) productList = productList.filter(v => v.pcatid === pcatid);
            return productList.map( v => <ProductCardContainer key={v.pid} product={v} addToCartHandler={props.handleAddToCart} addToCart={props.addToCart}/>);                  
        }
    }
    return(
        <section className="main-content">
            <div className='container d-flex flex-wrap mt-2 main-content'>
                {getProducts(props)}
            </div>
        </section>
    );
}


