import React from "react";

import { Task } from "./task";

export default ({ tasks }) => {
    return tasks.length ? tasks.map((task) => <Task key={task.id} name={task.name} date={task.date} />) : "Loading...";
};
