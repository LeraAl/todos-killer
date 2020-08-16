import React from "react";
import AddTaskForm from "../addTaskForm";
import VisibleTodoList from "../containers/visibleTodoList";
import { connect } from "react-redux";

let MainPanel = ({ filter }) => {
    return (
        <div className="container main-panel">
            <h2 className="page-title">{filter}</h2>
            <AddTaskForm />
            <VisibleTodoList />
        </div>
    );
};

const mapStateToProps = (state) => ({ filter: state.filter });

MainPanel = connect(mapStateToProps)(MainPanel);
export default MainPanel;
