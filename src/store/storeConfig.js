import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numeros: function(state, action) {
        console.log(state, ' ', action);
        return {
            min: 7,
            max: 33
        }
    },
    nomes: function(state, action) {
        // console.log(state, ' ', action);
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers) // ARRUMAR
}

export default storeConfig