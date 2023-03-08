import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";

const SearchTodo = ({todos, search}) => {

    const [name, setName] = useState('')

    const searchTodo = (e) => {
        e.preventDefault()
        if (name.trim() === "") {
            return
        }
        search(name)
        setName("")
    }

    return (
        <>
            <Card style={{padding: '15px'}}>
                <Form onSubmit={searchTodo}>
                    <Form.Group className="d-flex justify-content-center">
                        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder={"Search todo"}/>
                        <Button variant={"info"} onClick={searchTodo}>Search</Button>
                    </Form.Group>
                </Form>
            </Card>
        </>
    );
};

export default SearchTodo;