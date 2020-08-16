import { connect } from "react-redux";
import TodoList from "../presentational/todoList";
import { Filters } from "../../typings/tasks";

function filterTasks(filter, tasks) {
    const today = new Date(new Date().toDateString());

    switch (filter) {
        case Filters.TODAY:
            return tasks.filter((t) => t.date.toDateString() === new Date().toDateString());
        case Filters.UPCOMING:
            return tasks.filter((t) => t.date >= today);
        case Filters.ALL:
        default:
            return tasks;
    }
}

const mapStateToProps = (state) => {
    const { todos, filter } = state;
    return {
        tasks: filterTasks(filter, todos),
    };
};

const VisibleTodoList = connect(mapStateToProps)(TodoList);

export default VisibleTodoList;
