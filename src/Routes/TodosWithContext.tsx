import React,{ FunctionComponent } from "react";
import Todos from "../components/Todos";

const TodosWithContext: FunctionComponent = () => {
    return (
        <div>
            <button>Add Todo</button>
            <Todos/>
        </div>
    )
}

export default TodosWithContext;