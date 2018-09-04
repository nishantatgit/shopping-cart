import React from 'react';
import {shallow} from 'enzyme';
import {CardDisplay} from './CardDisplay.jsx';

describe('CardDisplay', () => {
    it('should render correctly without props', () => {
        const component = shallow(<CardDisplay />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
        const component = shallow(<CardDisplay title="product title" desc="this is some description" pcatid="pcat-1" />);
        expect(component).toMatchSnapshot();
    });
});