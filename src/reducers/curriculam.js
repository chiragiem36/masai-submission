const INIT_STATE = {
    tasks: [
        {
            text: "Task 1",
            indent: 1
        },{
            text: "Task 2",
            indent: 1
        },{
            text: "Task 3",
            indent: 1
        },{
            text: "Task 5",
            indent: 1
        }
    ],
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_NEW_TASK": {
            const tasks = [...state.tasks, action.payload.task];

            return {...state, tasks};
        }

        case "EDIT_TASK_LIST": {
            
            const {
                tasks,
            } = action.payload;

            return {...state, tasks};
        }

        case "REMOVE_TASK": {
            const tasks = [...state.tasks];
            tasks.splice(action.payload.index, 1);

            return {...state, tasks};
        }
        default:
            return state;
    }
}