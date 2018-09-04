import React from 'react';
import CategoryListContainer from '../CategoryList/CategoryListContainer';
import {CarouselContainer} from '../Carousel/CarouselContainer';
export class HomePageContentDisplay extends React.Component{
    render(){
        return(
            <section>
                <div>
                    <CarouselContainer></CarouselContainer>
                    <CategoryListContainer></CategoryListContainer>
                </div>
            </section>
        );
    }
}