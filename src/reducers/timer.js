const INIT_STATE = {
    timer: 300,
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "SET_TIMER": {
            return {...state, timer: action.payload};
            break;
        }
        default:
            return state;
    }
}