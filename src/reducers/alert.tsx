
import { act } from 'react-dom/test-utils';
import {SET_ALERT} from '../actions/types';

const initialState = {
    msg: '',
    alertType: ''
};

export default function(state = initialState, action:any) {

    const {type, payload} = action;

    switch(type) {
        case SET_ALERT:
            return {
                msg: payload.msg,
                alertType: payload.alertType
            };

        default:
            return state;
    }
} 