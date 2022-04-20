import React,{FunctionComponent} from "react";
import Todo from "./Todo";
import {ITodo} from "../../store/TodoContext";
interface ITodos {
    todo: ITodo[]
}
const Todos: FunctionComponent<ITodos> = ({todo}) => {
    return (
        <div>
            //Array Map here
            <Todo/>
        </div>
    )
}

export default Todos;