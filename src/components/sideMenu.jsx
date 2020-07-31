import React from "react";

import { TopMenu } from "./topMenu";
import { CollapsedMenu } from "./collapsedMenu";

export const SideMenu = (props) => {
    return (
        <div style={{ margin: "20px" }}>
            <TopMenu onFilterChange={props.onFilterChange} />
            <CollapsedMenu
                header="Projects"
                onSelect={props.onProjectChange}
                items={props.projects}
            />
        </div>
    );
};
