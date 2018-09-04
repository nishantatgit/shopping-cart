import React from 'react';
import {connect} from 'react-redux';
import {ProductDetailDisplay} from './ProductDetailDisplay.jsx';
import {getProductList} from '../../Actions/getProductList';
import {addItemToCart} from '../../Actions/addItemToCart';
import {getCategoryList} from '../../Actions/getCategoryList';
import {getItemFromCart} from '../../Actions/getItemFromCart';

class ProductDetailContainer extends React.Component {
    constructor(props){
        super(props);
        this.addToCart = (cartDetail, e) => {
            e.preventDefault();
            props.addToCart(cartDetail);
        }
    }
    render(){
        let {props} = this;
        return props.productList.length ? <ProductDetailDisplay productList={props.productList} cartDetail={props.cartDetail} addToCart={this.addToCart} pid={props.match.params.pid}/> : null;
    }
    componentDidMount(){
        let {props} = this;
        if(!props.productList.length){
            props.getProducts();
        }
        if(!props.cartDetail.length){
            props.getCartDetail();
        }
    }
}

const mapStateToProps = state => {
    return {
        productList : state.productList,
        cartDetail : state.cartDetailList
    }   
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts : () => dispatch(getProductList()),
        getCartDetail : () => dispatch(getItemFromCart()),
        addToCart : cartDetail => dispatch(addItemToCart(cartDetail))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailContainer);