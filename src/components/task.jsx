import React from "react";
import Card from "react-bootstrap/Card";

export const Task = (props) => {
    const { name, date } = props;

    return (
        <Card style={{ margin: "5px 0" }}>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>{name}</p>
                    <footer className="blockquote-footer">
                        {date ? date.toDateString() : "No date"}
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};
