import { actionTypes } from "../typings/actionTypes";
import { getTasks } from "../services/task.service";

const { TODO, FILTERS } = actionTypes;

export const getTodos = () => {
    return (dispatch) => {
        return getTasks().then((tasks) => dispatch(recieveTodos(tasks)));
    };
};

export const recieveTodos = (todos) => ({
    type: TODO.RECIEVE_TODOS,
    todos,
});

export const addTodo = (todo) => ({
    type: TODO.ADD_TODO,
    todo,
});

export const deleteTodo = (id) => ({
    type: TODO.DELETE_TODO,
    id,
});

export const toggleTodo = (id) => ({
    type: TODO.TOGGLE_TODO,
    id,
});

export const setFilter = (filter) => ({
    type: FILTERS.SET_FILTER,
    filter,
});

export const resetFilter = () => ({
    type: FILTERS.RESET_FILTER,
});
