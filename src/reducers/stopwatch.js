const INIT_STATE = {
    time: 0,
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "SET_TIME": {
            return {...state, time: action.payload};
            break;
        }
        default:
            return state;
    }
}