import React, {useState} from 'react';
import {Button, Card, Col, Form} from "react-bootstrap";

const AddTodo = ({create}) => {

    const [name, setName] = useState("")

    const addTodo = (e) => {
        e.preventDefault()
        if (name.trim() === "") return;
        const newTodo = {
            name: name,
            id: Date.now(),
            done: false
        }
        create(newTodo)
        setName("")
    }

    return (
        <Card style={{padding: '15px'}}>
            <Form onSubmit={addTodo}>
                <Form.Group className="d-flex justify-content-center flex-column">
                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder={"Enter todo name"}/>
                    <br/>
                    <Button variant={"info"} onClick={addTodo}>Add</Button>
                </Form.Group>
            </Form>
        </Card>
    );
};

export default AddTodo;