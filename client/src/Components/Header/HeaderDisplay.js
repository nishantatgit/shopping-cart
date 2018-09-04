import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export class HeaderDisplay extends React.Component{
    showItemsAdded(){
      let {noOfItemsInCart} = this.props;
      return noOfItemsInCart ? <sup className="rounded-circle pl-1 pr-1 bg-secondary text-white">{noOfItemsInCart || 0}</sup> : null;
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-info text-white">
            <a className="navbar-brand" href="#">Muzaffarpur Mart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active mr-4">
                  <Link className="nav-link text-white" to="/">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item mr-4">
                  <Link className="nav-link text-white" to="/products">Products</Link>
                </li>
                <li className="nav-item position-relative mr-4">
                  <Link className="nav-link text-white" to="/cart-detail">Cart{this.showItemsAdded()}</Link>
                </li>
                <li className="nav-item mr-4">
                  <Link className="nav-link text-white" to="/products/pcat-1">Login</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }

    componentDidMount(){
      console.log(this.props);
      this.props.getCartDetails();
    }
}