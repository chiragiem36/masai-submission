export const add_new_task_to_store = (payload) => ({
    type: "ADD_NEW_TASK",
    payload
})

export const edit_task_list_from_store = (payload) => ({
    type: "EDIT_TASK_LIST",
    payload
})

export const remove_task_from_store = (payload) => ({
    type: "REMOVE_TASK",
    payload
})