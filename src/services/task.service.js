import { TaskStatus } from "../typings/tasks";

export function getTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 0,
                    name: "task",
                    status: TaskStatus.DONE,
                    date: new Date(2020, 6, 30),
                },
                {
                    id: 1,
                    name: "task1",
                    status: TaskStatus.DONE,
                    date: new Date(2020, 3, 1),
                },
                {
                    id: 2,
                    name: "task2",
                    status: TaskStatus.TODO,
                    date: new Date(2020, 8, 4),
                },
            ]);
        }, 1000);
    });
}

export function getProjects() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 0,
                    name: "project 0",
                },
                {
                    id: 1,
                    name: "project 1",
                },
                {
                    id: 2,
                    name: "project 2",
                },
            ]);
        }, 1000);
    });
}
