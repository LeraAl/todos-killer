import React from "react";

import { TopMenu } from "./topMenu";

export const SideMenu = (props) => {
    return (
        <div style={{ margin: "20px" }}>
            <TopMenu onFilterChange={props.onFilterChange} />
        </div>
    );
};
