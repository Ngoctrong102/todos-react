var actionTask = {
    addTask: function(task) {
        return {
            type: 'ADD_TASK',
            payload: {
                task
            }
        }
    },
    delTask: (index) => {
        return {
            type: 'DEL_TASK',
            payload: {
                index
            }
        }
    }
}

export default actionTask;