import React, {FunctionComponent, SetStateAction} from "react";
import {ITodo} from "../../store/TodoContext";
interface ITodoContextModal {
    modal:boolean,
    setTodo:React.Dispatch<SetStateAction<ITodo[]>>
}
const TodoContextModal: FunctionComponent<ITodoContextModal> = ({modal,setTodo}) => {
    return (
        <div>

        </div>
    )
}

export default TodoContextModal;