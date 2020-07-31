import React, { useEffect, useState } from "react";
import { SideMenu } from "./components/sideMenu";
import { MainPanel } from "./components/mainPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { getTasks, getProjects } from "./services/task.service";
import { Filters } from "./typings/tasks";

export const App = () => {
    const [filter, setFilter] = useState(Filters.ALL);
    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState("");

    useEffect(() => {
        getTasks().then((data) => setTasks(data));
        getProjects().then((data) => setProjects(data));
    }, []);

    function addTask(task) {
        const id = tasks.length;
        setTasks([...tasks, { ...task, id }]);
    }

    function onFilterChange(filter) {
        setProject("");
        setFilter(filter);
    }

    function onProjectChange(newProject) {
        console.log("newProject :>> ", newProject);
        setFilter(Filters.ALL);
        setProject(newProject);
    }

    return (
        <React.Fragment>
            <SideMenu
                onFilterChange={onFilterChange}
                projects={projects}
                onProjectChange={onProjectChange}
            />
            <MainPanel
                filter={filter}
                project={project}
                tasks={tasks}
                projects={projects}
                addTask={addTask}
            />
        </React.Fragment>
    );
};
