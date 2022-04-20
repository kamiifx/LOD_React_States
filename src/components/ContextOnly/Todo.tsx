import React,{FunctionComponent} from "react";
import {ITodo} from "../../store/TodoContext";
interface ITodoItem{
    todo: ITodo
}
const Todo: FunctionComponent<ITodoItem> = ({todo}) => {
    return (
        <div className="shadow-md ">
            <h1>{todo.title}</h1>
            <div>
                <p>{todo.description}</p>
                <p>{todo.author}</p>
            </div>
        </div>
    )
}

export default Todo;