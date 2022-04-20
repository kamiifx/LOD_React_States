import React, {FunctionComponent} from "react";
import {modalState, todoListState} from "../store/recoil/todoAtoms";
import {useRecoilState, useRecoilValue} from "recoil";
import TodoRecoilModal from "../components/RecoilOnly/TodoRecoilModal";
import TodosRecoil from "../components/RecoilOnly/TodosRecoil";


const TodosWithRecoil: FunctionComponent = () => {
    const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
    const todoList = useRecoilValue(todoListState);

    return(
    <div>
        <TodoRecoilModal modal={isModalOpen} setModal={setIsModalOpen}/>
        <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-blue-400/50 px-2 py-1 rounded font-inter text-md mt-20 text-white mt-12 shadow-md hover:scale-110 duration-100 border-none"
            onClick={() => {
                setIsModalOpen(true)
            }}
        >
            Add Todo
        </button>
        <div className="bg-gray-300 h-[2px] mt-6 w-full"/>
        <TodosRecoil todo={todoList}/>
    </div>
    )
}

export default TodosWithRecoil;