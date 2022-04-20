import React,{FunctionComponent} from "react";
import Todo from "./Todo";
import {ITodo} from "../../store/TodoContext";
interface ITodos {
    todo: ITodo[]
}
const Todos: FunctionComponent<ITodos> = ({todo}) => {
    return (
        <div>
            {todo.map((todoItem) =>
                <Todo key={todoItem.id} todo={todoItem}/>
            )}
        </div>
    )
}

export default Todos;