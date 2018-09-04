import React from 'react';
import {shallow} from 'enzyme';
import {ProductCardDisplay} from './ProductCardDisplay.jsx';
import ProductCardContainer from './ProductCardContainer';

describe('ProductCardDisplay', () => {
    it('should render correctly', () => {
        const product = {
            pid : 'p-1',
            pname: 'test-1',
            inventories : { price : 1 }
        }
        const component = shallow(<ProductCardDisplay product={product} />);
        expect(component).toMatchSnapshot();
    });
});

