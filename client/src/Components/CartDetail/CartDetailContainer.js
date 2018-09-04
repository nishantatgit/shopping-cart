import React from 'react';
import {connect} from 'react-redux';
import {CartDetailDisplay} from './CartDetailDisplay.jsx';
import {clearCart} from '../../Actions/clearCart';
import {removeItemFromCart} from '../../Actions/removeItemFromCart';
import {addItemToCart} from '../../Actions/addItemToCart';

import './CartDetail.css';

class CartDetailContainer extends React.Component {
    constructor(props){
        super(props);
        this.removeFromCart = (pid,e) => {
            e.preventDefault();
            this.props.removeFromCart(pid);
        }
    }
    render(){
        let {props} = this;
        return <CartDetailDisplay cartDetails={props.cartDetails} removeFromCart={this.removeFromCart} clearCart={props.clearCart.bind(this)} />;
    }
}

const mapStateToProps = state => ( {
    cartDetails : state.cartDetailList
});

const mapDispatchToProps = dispatch => ({
    clearCart : () => dispatch(clearCart()),
    removeFromCart : pid => dispatch(removeItemFromCart(pid)),
    addToCart : cardDetail => dispatch(addItemToCart(cardDetail))
})

export default connect(mapStateToProps,mapDispatchToProps)(CartDetailContainer);