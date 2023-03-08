import React, {useEffect} from 'react';
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({todos, remove, onToggleDone, edit}) => {


    return (
        <div>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} remove={remove} onToggleDone={onToggleDone} edit={edit}/>
            ))}
        </div>
    );
};

export default TodoList;