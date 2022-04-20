import React,{ FunctionComponent } from "react";
import Todos from "../components/ContextOnly/Todos";
import TodoContextModal from "../components/ContextOnly/TodoContextModal";
import { useTodoContext } from "../store/TodoContext";

const TodosWithContext: FunctionComponent = () => {
    const {modal, setModal, todo, setTodo} = useTodoContext();
    return (
        <div>
            <TodoContextModal modal={modal} setTodo={setTodo}/>
            <button className="bg-blue-300 px-2 py-1 rounded font-mono text-white mt-5 shadow-md"
                onClick={() => {setModal(true)}}
            >
                Add Todo
            </button>
            <Todos todo={todo}/>
        </div>
    )
}

export default TodosWithContext;