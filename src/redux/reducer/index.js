/**
 * reducer
 */

import { combineReducers } from 'redux'
import { type } from '../action';
const ebikeData = (state = {}, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};
const testRedux = (state = {}, action) => {
    // console.log(state, action)
    switch (action.type) {
        case type.TEST:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

const mainReducer = combineReducers({
    ebikeData: ebikeData,
    testRedux
})
export default mainReducer;