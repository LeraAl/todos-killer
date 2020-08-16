import { actionTypes } from "../typings/actionTypes";
import { Filters } from "../typings/tasks";

export default (state = Filters.ALL, action) => {
    switch (action.type) {
        case actionTypes.FILTERS.SET_FILTER:
            return action.filter;
        case actionTypes.FILTERS.RESET_FILTER:
            return Filters.ALL;
        default:
            return state;
    }
};
