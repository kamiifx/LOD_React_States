import React,{ FunctionComponent } from "react";
import Todos from "../components/ContextOnly/Todos";
import TodoContextModal from "../components/ContextOnly/TodoContextModal";
import { useTodoContext } from "../store/TodoContext";

const TodosWithContext: FunctionComponent = () => {
    const {modal, setModal} = useTodoContext();
    return (
        <div>
            <TodoContextModal modal={modal}/>
            <button onClick={() => {setModal(true)}}>Add Todo</button>
            <Todos/>
        </div>
    )
}

export default TodosWithContext;