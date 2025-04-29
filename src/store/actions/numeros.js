import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from "./actionTypes"

    // Action Creator
export function altNumMin(novoNum) {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNum
    }
}

export function altNumMax(novoNum) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNum
    }
}