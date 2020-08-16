import React, { useEffect, useState } from "react";
import { SideMenu } from "./components/presentational/sideMenu";
import MainPanel from "./components/presentational/mainPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { getTasks } from "./services/task.service";
import { Filters } from "./typings/tasks";
import { getTodos } from "./actions";
import { connect } from "react-redux";

let App = ({ dispatch }) => {
    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    return (
        <React.Fragment>
            <SideMenu />
            <MainPanel />
        </React.Fragment>
    );
};

App = connect()(App);
export default App;
