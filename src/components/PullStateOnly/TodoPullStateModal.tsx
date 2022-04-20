import React, {FunctionComponent, SetStateAction} from "react";
import uniqueId from "lodash.uniqueid";
import {createTodo, TodoStore} from "../../store/pullState/TodoStore";
import Todo from "../ContextOnly/Todo";

const TodoPullStateModal: FunctionComponent = () => {

    const onFormSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: { value: string };
            description: { value: string };
        };
        const newTodo = {
            title: target.title.value,
            description: target.description.value,
            id: uniqueId(),
            author: "You",
        }

        createTodo(newTodo)

        TodoStore.update(m => { m.modal = false})
    }

    const modal = TodoStore.useState(m => m.modal);

    return (
        <div className={modal ? "absolute top-[30%] left-[43%] shadow-lg shadow-indigo-400/30 p-14 border-solid border-2 rounded-md border-indigo-300 bg-white" : "hidden"}>
            <button className="absolute top-1 right-3 font-semibold font-nunito text-gray-500" onClick={() => {TodoStore.update(m => {m.modal = false})}} >X</button>
            <form onSubmit={onFormSubmit}>
                <h1 className="mb-4 font-nunito font-semibold text-lg">Create a todo</h1>
                <div className="flex flex-col">
                    <label htmlFor="title" className="my-2 font-mono text-sm">Title</label>
                    <input type="text" placeholder="Title" name="title" className="shadow-md py-2 px-1 rounded w-[18em]"/>

                    <label htmlFor="description" className="my-2 font-mono text-sm">Description</label>
                    <textarea name="description" placeholder="Description here" className="shadow-md py-2 px-1 rounded">
                    </textarea>
                    <button type="submit" className="mt-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 rounded shadow-lg shadow-indigo-400/50
                    hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-100 text-white font-nunito">Create</button>
                </div>
            </form>
        </div>
    )
}

export default TodoPullStateModal;