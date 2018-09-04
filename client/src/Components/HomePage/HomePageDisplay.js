import React from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import {HeaderContainer} from '../Header/HeaderContainer';
import {FooterContainer} from '../Footer/FooterContainer';
import {HomePageContentContainer} from './HomePageContentContainer';
import {ProductListPageContainer} from '../ProductListPage/ProductListPageContainer';
import CartDetailContainer from '../CartDetail/CartDetailContainer';
import ProductDetailContainer from '../ProductDetail/ProductDetailContainer';

export class HomePageDisplay extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router>
                <div>
                    <HeaderContainer/>
                    <Switch>
                        <Route path="/" component={HomePageContentContainer} exact={true}/>
                        <Route path="/products" component={ProductListPageContainer} exact={true}/>
                        <Route path="/products/:pcatid" component={ProductListPageContainer}/>
                        <Route path="/cart-detail" component={CartDetailContainer}/>
                        <Route path="/product-detail/:pid" component={ProductDetailContainer}/>
                    </Switch>
                </div>
            </Router>
        );
    }

}