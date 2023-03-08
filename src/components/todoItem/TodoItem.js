import React, {useState} from 'react';
import {Button, ButtonGroup, Card, Col, FormCheck, Modal, Row} from "react-bootstrap";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import EditTodo from "../editTodo/EditTodo";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const TodoItem = ({todo, remove, onToggleDone, edit}) => {

    // const [doneStyle, setDoneStyle] = useState({
    //     textDecoration: "none",
    //     color: "black"
    // })

    let doneStyle = todo.done
        ? {
            textDecoration: "line-through",
            color: "gray"
        }
        : {
            textDecoration: "none",
            color: "black"
        }

    const onDone = (e) => {
        onToggleDone(todo)
        doneStyle = todo.done
            ? {
                textDecoration: "line-through",
                color: "gray"
            }
            : {
                textDecoration: "none",
                color: "black"
            }
    }

    const [modal, setModal] = useState(false);

    const handleClose = () => setModal(false);
    const handleShow = () => setModal(true);

    return (
        <Row className="justify-content-center" style={{padding: '10px 0px 10px 15px', }}>
            <Modal show={modal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditTodo todo={todo} edit={edit} close={handleClose}/>
                </Modal.Body>
            </Modal>
            <Col md={10}
                 style={{userSelect: 'none', textDecoration: doneStyle.textDecoration, color: doneStyle.color}}>
                {todo.name}
            </Col>
            <Col xs={2}>
                {/*style={{float: "right"}}*/}
                <ButtonGroup className="d-flex align-items-center">
                    <Button variant={"light"} onClick={onDone}>
                        {
                            todo.done && (<MdOutlineCheckBox/>)
                        }
                        {
                            !todo.done && (<MdOutlineCheckBoxOutlineBlank/>)
                        }
                    </Button>
                    <Button variant={"light"} style={{color: "#FFDE00"}} onClick={handleShow}>
                        <BsFillPencilFill/>
                    </Button>
                    <Button variant={"light"} style={{color: "red"}} onClick={() => remove(todo)}>
                        <BsFillTrashFill/>
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
    );
};

export default TodoItem;