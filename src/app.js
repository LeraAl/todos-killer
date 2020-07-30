import React, { useEffect, useState } from "react";
import { SideMenu } from "./components/sideMenu";
import { MainPanel } from "./components/mainPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { getTasks } from "./services/task.service";
import { Filters } from "./typings/tasks";

export const App = () => {
    const [filter, setFilter] = useState(Filters.ALL);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then((data) => setTasks(data));
    }, []);

    function addTask(task) {
        const id = tasks.length;
        setTasks([...tasks, { ...task, id }]);
    }

    return (
        <React.Fragment>
            <SideMenu onFilterChange={setFilter} />
            <MainPanel filter={filter} tasks={tasks} addTask={addTask} />
        </React.Fragment>
    );
};
