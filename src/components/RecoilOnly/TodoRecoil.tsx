import React,{FunctionComponent} from "react";
import {ITodo} from "../../store/TodoContext";
import {todoListState} from "../../store/recoil/todoAtoms";
import {useRecoilState} from "recoil";

interface ITodoItem{
    todo:  ITodo
}
const TodoRecoil: FunctionComponent<ITodoItem> = ({todo}) => {

    const [todoList, setTodoList] = useRecoilState(todoListState)

    const deleteTodo = (todoItem: ITodo): void => {
        const newTodos = todoList.filter((todo) => todo.id !== todoItem.id)
        setTodoList(newTodos);
    }
    return (
        <div>
            <div className="shadow-lg h-[10em] w-[18em] m-4 border-indigo-300 border-2 rounded-md relative">
                <p className="absolute right-3 text-red-300 font-inter cursor-pointer" onClick={() => deleteTodo(todo)}>x</p>
                <h1 className="pt-2 pl-2 font-sora">{todo.title}</h1>
                <div className="w-[96%] m-auto bg-gray-200 h-[2px]"/>
                <div className="pl-2 pt-2">
                    <p className="font-hahmlet">{todo.description}</p>
                </div>
                <p className="absolute pl-2 bottom-2 font-inter text-gray-600">Created By: {todo.author}</p>
            </div>
        </div>
    )
}

export default TodoRecoil;