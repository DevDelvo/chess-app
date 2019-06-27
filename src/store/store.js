import { createStore } from 'redux';
import { initializeBoard } from '../helperFunctions/index'

const board = initializeBoard();

const initialState = {
    turn: "white",
    status: '',
    board: board,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;