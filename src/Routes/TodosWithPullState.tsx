import React, {FunctionComponent} from "react";
import TodoPullStateModal from "../components/PullStateOnly/TodoPullStateModal";
import TodosPullState from "../components/PullStateOnly/TodosPullState";
import {TodoStore} from "../store/pullState/TodoStore";

const TodosWithPullState: FunctionComponent = () => {

    return(
    <div>
        <TodoPullStateModal />
        <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-blue-400/50 px-2 py-1 rounded font-inter text-md mt-20 text-white mt-12 shadow-md hover:scale-110 duration-100 border-none"
            onClick={() => {
                TodoStore.update(m => {m.modal = true})
            }}
        >
            Add Todo
        </button>
        <div className="bg-gray-300 h-[2px] mt-6 w-full"/>
        <TodosPullState />
    </div>
    )
}

export default TodosWithPullState;