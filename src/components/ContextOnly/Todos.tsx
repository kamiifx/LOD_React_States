import React,{FunctionComponent} from "react";
import Todo from "./Todo";
import {ITodo} from "../../store/TodoContext";

interface ITodos {
    todo: ITodo[],
}
const Todos: FunctionComponent<ITodos> = ({todo}) => {
    return (
        <div className="flex flex-row flex-wrap">
            {todo.map((todoItem) =>
                <Todo todo={todoItem} key={todoItem.id}/>
            )}
        </div>
    )
}

export default Todos;