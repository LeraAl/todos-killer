import React from "react";
import { Filters } from "../typings/tasks";
import Nav from "react-bootstrap/Nav";

export const TopMenu = (props) => {
    const { onFilterChange } = props;

    return (
        <Nav
            variant="pills"
            onSelect={(selectedKey) => onFilterChange(selectedKey)}
            defaultActiveKey={Filters.ALL}
            className="flex-column"
        >
            <Nav.Link eventKey={Filters.ALL}>All</Nav.Link>
            <Nav.Link eventKey={Filters.TODAY}>Today</Nav.Link>
            <Nav.Link eventKey={Filters.UPCOMING}>Upcoming</Nav.Link>
        </Nav>
    );
};
