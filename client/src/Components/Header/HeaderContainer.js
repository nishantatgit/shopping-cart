import {connect} from 'react-redux';
import {HeaderDisplay} from './HeaderDisplay';
import {getItemFromCart} from '../../Actions/getItemFromCart';

const mapStateToProps = state => {
    return {
        noOfItemsInCart : state.noOfItemsInCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartDetails : () => dispatch(getItemFromCart())
    }
}

export const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderDisplay);
