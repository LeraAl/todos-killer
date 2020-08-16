import React, { useState } from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { addTodo } from "../actions";

let AddTaskForm = ({ dispatch }) => {
    const [input, setInput] = useState("");
    const [date, setDate] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({ name: input, date: date && new Date(date) }));
        setDate("");
        setInput("");
    };

    return (
        <Form className="add-task-form" onSubmit={handleSubmit}>
            <Form.Row>
                <Col xs={12} sm={8}>
                    <Form.Control
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                        type="text"
                        placeholder="Task..."
                    ></Form.Control>
                </Col>
                <Col>
                    <Form.Control onChange={(e) => setDate(e.target.value)} value={date} type="date"></Form.Control>
                </Col>
            </Form.Row>
        </Form>
    );
};

AddTaskForm = connect()(AddTaskForm);
export default AddTaskForm;
