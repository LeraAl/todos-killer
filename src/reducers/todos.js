import { actionTypes } from "../typings/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.TODO.RECIEVE_TODOS:
            return action.todos;
        case actionTypes.TODO.ADD_TODO:
            return [...state, action.todo];
        case actionTypes.TODO.DELETE_TODO:
            return [...state.slice(0, action.id), ...state.slice(action.id + 1)];
        case actionTypes.TODO.TOGGLE_TODO:
            // payload: { id }
            return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
        default:
            return state;
    }
};
