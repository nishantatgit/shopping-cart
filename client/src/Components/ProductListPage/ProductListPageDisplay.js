import React from 'react';
import ProductListContainer from '../ProductList/ProductListContainer';
import SidebarContainer from '../SideBar/SidebarContainer';
import './ProductListPage.css';

export class  ProductListPageDisplay extends React.Component{
    render(){
        return(
            <div>
                <SidebarContainer></SidebarContainer>
                <ProductListContainer className="main-content" match={this.props.match}></ProductListContainer>
            </div>
        )
    }
}