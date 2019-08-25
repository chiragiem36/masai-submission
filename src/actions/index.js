export const set_timer = (timer) => ({
    type: "SET_TIMER",
    payload: timer
})

export const stop_timer = () => ({
    type: "STOP_TIMER"
})

export const reset_timer = () => ({
    type: "RESET_TIMER"
})