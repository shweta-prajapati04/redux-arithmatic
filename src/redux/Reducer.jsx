import React from 'react'
import { ADD, DIV, MUL, RESET, SUB } from './Action';
let initialState = 10;
export const Reducer = (reduxState = initialState, action) => {
    switch (action.type) {
        case ADD:
            return Number(reduxState) + Number(action.payload);
        case SUB:
            return reduxState >= action.payload ? Number(reduxState) - Number(action.payload) : reduxState;
        case MUL:
            return Number(reduxState) * Number(action.payload);
        case DIV:
            return reduxState > 0 && action.payload > 0 ? Number(reduxState) / Number(action.payload) : 0;
        case RESET:
            return initialState;
        default:
            return reduxState;
    }

    return (
        <></>
    )
}
