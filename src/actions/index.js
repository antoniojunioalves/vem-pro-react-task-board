export const createTask = (taskName) => ({
    type: 'ADD_TASK',
    payload: taskName
})