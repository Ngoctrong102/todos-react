const initState = {
    tasks: []
};

function taskReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            {
                return {
                    tasks: [...state.tasks, action.payload.task]
                }
            }
        case "DEL_TASK":
            {
                var newState = { tasks: [] };
                newState.tasks = state.tasks.filter(t => t != state.tasks[action.payload.index])
                return newState
            }
        default:
            {
                return state
            }
    }
}

export default taskReducer;