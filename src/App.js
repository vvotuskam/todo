import React, {useEffect, useState} from 'react';
import AddTodo from "./components/addTodo/AddTodo";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import "./App.css"
import TodoItem from "./components/todoItem/TodoItem";
import TodoList from "./components/listTodo/TodoList";
import SearchTodo from "./components/searchTodo/SearchTodo";

const App = () => {

    const Filter = {
        ALL: 'all',
        DONE: 'done',
        TODO: 'todo'
    }

    const [todos, setTodos] = useState([])
    const [visibles, setVisibles] = useState(todos)

    useEffect(() => {
        setVisibles(todos)
    }, [todos])

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }
    const removeTodo = (todo) => {
        setTodos([...todos].filter(t => t.id !== todo.id))
    }
    const onToggleDone = (todo) => {
        const newTodos = [...todos]
        for (const t of newTodos) {
            if (t.id === todo.id) {
                t.done = !t.done
            }
        }
        setTodos(newTodos)
    }
    const editTodo = (todo) => {
        const newTodos = [...todos]
        for (const t of newTodos) {
            if (t.id === todo.id) {
                t.name = todo.name
            }
        }
        setTodos(newTodos)
    }

    const deleteAll = () => {
        setTodos([])
    }
    const deleteDone = () => {
        setTodos([...todos].filter(todo => !todo.done))
    }
    const handleFilter = (e) => {
        setVisibles(filterTodo(e.target.value))
    }
    const filterTodo = (filter) => {
        let newVisibles
        switch (filter) {
            case Filter.DONE:
                newVisibles = [...todos].filter(t => t.done)
                break;
            case Filter.TODO:
                newVisibles = [...todos].filter(t => !t.done)
                break;
            default:
                newVisibles = [...todos]
                break;
        }
        return newVisibles
    }

    const onSearch = (name) => {
        let newVisibles = [...todos].filter(todo => todo.name.toLowerCase().includes(name.toLowerCase()))
        setVisibles(newVisibles)
    }

    return (
        <Container className="App">
            <Row className="justify-content-center">
                <h1>Todo List</h1>
            </Row>
            <Row className="justify-content-center">
                <Col xs={7}>
                    <AddTodo create={createTodo}/>
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-center">
                <Col xs={7}>
                    <SearchTodo todos={visibles} search={onSearch}/>
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-center">
                <Col xs={7} >
                    <Row className={"justify-content-around"}>
                        <Button id="filter-btn" variant={"info"} onClick={handleFilter} value={Filter.ALL}>All</Button>
                        <Button id="filter-btn" variant={"info"} onClick={handleFilter} value={Filter.DONE}>Done</Button>
                        <Button id="filter-btn" variant={"info"} onClick={handleFilter} value={Filter.TODO}>Todo</Button>
                    </Row>
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-center">
                <Col xs={7}>
                    <TodoList todos={visibles} edit={editTodo} remove={removeTodo} onToggleDone={onToggleDone}/>
                </Col>
            </Row>
            <br/>
            {
                visibles.length !== 0
                    && <Row className="justify-content-center">
                        <Col xs={7}>
                            <Row className="justify-content-around">
                                <Button variant="danger" onClick={deleteAll}>Delete all tasks</Button>
                                <Button variant="danger" onClick={deleteDone}>Delete done tasks</Button>
                            </Row>
                        </Col>
                    </Row>
            }
        </Container>
    );
};

export default App;