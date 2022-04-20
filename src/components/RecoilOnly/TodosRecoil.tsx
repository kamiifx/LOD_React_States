import React,{FunctionComponent} from "react";
import TodoRecoil from "./TodoRecoil";
import {SetterOrUpdater} from "recoil";
import {ITodo} from "../../store/TodoContext";

interface ITodos {
    todo: any[],
}

const TodosRecoil: FunctionComponent<ITodos> = ({todo}) => {
    return (
        <div className="flex flex-row flex-wrap">
            {todo.map((todoItem: ITodo) =>
                <TodoRecoil todo={todoItem} key={todoItem.id}/>
            )}
        </div>
    )
}

export default TodosRecoil;