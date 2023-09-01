import { ADD, DIV, MUL, RESET, SUB } from "./Action"

export const handleAdd = (value) => {
    return {
        type: ADD,
        payload: value
    }
}

export const handleSub = (value) => {
    return {
        type: SUB,
        payload: value
    }
}

export const handleMul = (value) => {
    return {
        type: MUL,
        payload: value
    }
}
export const handleDiv = (value) => {
    return {
        type: DIV,
        payload:Number(value)
    }
}
export const handleReset= () => {
    return {
        type: RESET
    }
}