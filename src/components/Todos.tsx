import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos: React.FC<{items: Todo[], onRemoveTodo: (todoId: string) => void}> = (props) => {
    return <ul className={classes.todos}>
        {props.items.map((item) => (
            <TodoItem onRemoveTodo={props.onRemoveTodo} item={item}/>
        ))}
    </ul>
}

export default Todos;