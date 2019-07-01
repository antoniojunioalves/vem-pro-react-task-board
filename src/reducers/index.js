import { DEFAULT_ECDH_CURVE } from "tls";
import { stat } from "fs";

const initialState = {
    board: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                board: [...state.board, action.payload]
            }
        default: 
            return state
    }
}

export default reducer;