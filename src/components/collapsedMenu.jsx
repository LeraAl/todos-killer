import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Collapse, Container } from "react-bootstrap";

export const CollapsedMenu = (props) => {
    const { onSelect, items, header } = props;
    const [collapsed, setCollapsed] = useState(true);

    const links = items.map((item) => (
        <Nav.Link eventKey={item.id} key={item.id}>
            {item.name}
        </Nav.Link>
    ));
    return (
        <>
            <div
                className="menu-header"
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? "ᐅ" : "ᐁ"} {header}
            </div>
            <Collapse in={!collapsed}>
                <Container>
                    <Nav
                        variant="pills"
                        onSelect={(selectedKey) => onSelect(selectedKey)}
                        className="flex-column"
                    >
                        {links}
                    </Nav>
                </Container>
            </Collapse>
        </>
    );
};
