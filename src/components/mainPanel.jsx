import React from "react";
import { Filters } from "../typings/tasks";
import { Task } from "./task";
import { AddTaskForm } from "./addTaskForm";

export const MainPanel = (props) => {
    const { tasks, filter, addTask } = props;
    console.log("filter :>> ", filter);
    const tasksToDisplay = filterTasks(filter, tasks);

    return (
        <div className="container main-panel">
            <h2 className="page-title">{filter}</h2>
            <AddTaskForm onSubmit={addTask} />
            {tasks.length
                ? tasksToDisplay.map((task) => (
                      <Task key={task.id} name={task.name} date={task.date} />
                  ))
                : "Loading..."}
        </div>
    );
};
function filterTasks(filter, tasks) {
    const today = new Date(new Date().toDateString());

    switch (filter) {
        case Filters.TODAY:
            return tasks.filter(
                (t) => t.date.toDateString() === new Date().toDateString()
            );
        case Filters.UPCOMING:
            return tasks.filter((t) => t.date >= today);
        case Filters.ALL:
        default:
            return tasks;
    }
}
