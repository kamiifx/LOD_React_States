import React,{ FunctionComponent } from "react";
import Todos from "../components/ContextOnly/Todos";
import TodoContextModal from "../components/ContextOnly/TodoContextModal";
import { useTodoContext } from "../store/TodoContext";

const TodosWithContext: FunctionComponent = () => {
    const {modal, setModal, todo, createTodo} = useTodoContext();
    return (
        <div>
            <TodoContextModal modal={modal} addTodo={createTodo} setModal={setModal}/>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-1 rounded font-mono text-white mt-5 shadow-md hover:scale-110 duration-100 shadow-blue-400/50"
                onClick={() => {setModal(true)}}
            >
                Add Todo
            </button>
            <Todos todo={todo}/>
        </div>
    )
}

export default TodosWithContext;