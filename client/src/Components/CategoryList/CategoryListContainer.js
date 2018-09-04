import React from 'react';
import {connect} from 'react-redux';
import {CategoryListDisplay} from './CategoryListDisplay.jsx'; 
import {getCategoryList} from '../../Actions/getCategoryList';

class CategoryListContainer extends React.Component{
    render(){
        let {categories = []} = this.props;
        return categories.length ? <CategoryListDisplay categories={categories}/> : null;
    }
    componentDidMount(){
        this.props.categoryList();
    }
}

const mapStateToProps = state => {
    return { categories : state.categoryList } 
}

const mapDispatchToProps = dispatch => {
    return {
        categoryList : () => dispatch(getCategoryList()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CategoryListContainer);