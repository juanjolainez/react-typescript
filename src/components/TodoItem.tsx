import Todo from "../models/todo";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{item: Todo, onRemoveTodo: (todoId: string) => void}> = (props) => {
    return <li className={classes.item} key={props.item.id} onClick={props.onRemoveTodo.bind(null, props.item.id)}>{props.item.text}</li>
}

export default TodoItem;