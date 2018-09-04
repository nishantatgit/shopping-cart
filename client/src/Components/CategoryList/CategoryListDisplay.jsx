import React from 'react';
import {CardContainer} from '../Card/CardContainer';

export const CategoryListDisplay = ({categories}) => {
    return (
        <section className="d-flex flex-wrap h-100">
        {categories.map( category => <CardContainer title={category.pcatname} desc={category.pcatdesc} key={category.pcatid} pcatid={category.pcatid}>
            </CardContainer>)}
       </section>
    );
}
