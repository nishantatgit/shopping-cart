import React from 'react';
import {connect} from 'react-redux';
import {ProductListDisplay} from './ProductListDisplay.jsx';
import {getProductList} from '../../Actions/getProductList';
import {setProductFilter} from '../../Actions/setProductFilter';
import {getInventory} from '../../Actions/getInventory';
import {addItemToCart} from '../../Actions/addItemToCart';
import {setCurrentCategory} from '../../Actions/setCurrentCatgory';

class ProductListContainer extends React.Component{
    constructor(props){
        super(props);
    }
    handleAddToCart(product,e){
            e.preventDefault();
            this.props.addToCart({
                pid : product.pid,
                pname : product.pname,
                price : product.inventories.length && product.inventories[0].price,
                cardid : 'cart-0001',
                pcatid : 'pcat-1',
                userid : 'usr-00001'
            });
    }
    render(){
        return this.props.products && this.props.products.length ?  <ProductListDisplay handleAddToCart={this.handleAddToCart.bind(this)} products={this.props.products} pcatid={this.props.match.params.pcatid}/> : null;
    }
    componentDidUpdate(){
        this.props.setCurrentCategory(this.props.match.params && this.props.match.params.pcatid);
    }

    componentDidMount(){
        this.props.productList(this.props.match.params && this.props.match.params.pcatid);
    }
}

const mapStateToProps = state => {
    return { products : state.productList } 
}

const mapDispatchToProps = dispatch => {
    return {
        productList : pcatid => dispatch(getProductList(pcatid)),
        inventory : () => dispatch(getInventory()),
        addToCart : cartDetail => dispatch(addItemToCart(cartDetail)),
        setCurrentCategory : pcatid => dispatch(setCurrentCategory(pcatid || null))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductListContainer);
