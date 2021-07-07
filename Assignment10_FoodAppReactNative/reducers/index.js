import { combineReducers } from 'redux';
import vegan from './fatFree_reducer';
import fatFree from './vegan_reducer';
import products from './product_reducer';

const rootReducer = combineReducers({
    // fatFree,
    // vegan
    products
}) 

export default rootReducer;