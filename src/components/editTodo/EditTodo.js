import React, {useState} from 'react';
import {Button, Form, Row} from "react-bootstrap";

const EditTodo = ({todo, edit, close}) => {

    const [name, setName] = useState(todo.name)

    const editTodo = (e) => {
        e.preventDefault()
        if (name === "") return;
        edit({
            id: todo.id,
            name: name,
            done: todo.done
        });
        close();
    }

    return (
        <Form onSubmit={editTodo}>
            <Form.Group>
                <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder={"Enter todo name"}/>
                <br/>
                <Button onClick={editTodo} style={{float: 'right'}} variant={"info"}>Edit</Button>
            </Form.Group>
        </Form>
    );
};

export default EditTodo;