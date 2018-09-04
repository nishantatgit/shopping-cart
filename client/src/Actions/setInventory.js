import {makeActionCreator} from '../Utility/makeActionCreator';
export const SET_INVENTORY = 'SET_INVENTORY';
export const setInventory = makeActionCreator(SET_INVENTORY,'inventory');