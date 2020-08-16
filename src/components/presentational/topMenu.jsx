import React from "react";
import { Filters } from "../../typings/tasks";
import Nav from "react-bootstrap/Nav";
import FilterLink from "../containers/filterLink";

export const TopMenu = (props) => {
    const { onFilterChange } = props;

    return (
        <Nav
            variant="pills"
            onSelect={(selectedKey) => onFilterChange(selectedKey)}
            defaultActiveKey={Filters.ALL}
            className="flex-column"
        >
            <FilterLink filter={Filters.ALL}>All</FilterLink>
            <FilterLink filter={Filters.TODAY}>Today</FilterLink>
            <FilterLink filter={Filters.UPCOMING}>Upcoming</FilterLink>
        </Nav>
    );
};
