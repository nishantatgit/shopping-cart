import React from 'react';
import {connect} from 'react-redux';
import {SidebarDisplay} from './SidebarDisplay.jsx';
import {getCategoryList} from '../../Actions/getCategoryList';

class SidebarContainer extends React.Component{
    render(){
        let {categories} = this.props;
        return categories.length ? <SidebarDisplay categories={categories} currentCategory={this.props.currentCategory}/> : null;
    }
    componentDidMount(){
        this.props.categoryList();
    }
}

const mapDispatchToProps = dispatch => {
    return {
        categoryList : () => dispatch(getCategoryList())
    }
};

const mapStateToProps = state => {
    return {
        categories : state.categoryList,
        currentCategory : state.currentCategory
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SidebarContainer);
