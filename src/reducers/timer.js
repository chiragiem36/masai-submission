const INIT_STATE = {
    timer: 3,
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