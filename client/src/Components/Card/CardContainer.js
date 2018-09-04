import {connect} from 'react-redux';
import {CardDisplay} from './CardDisplay.jsx';
import './card.css';

export const CardContainer = connect()(CardDisplay);