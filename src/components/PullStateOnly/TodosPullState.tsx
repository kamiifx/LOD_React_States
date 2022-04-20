import React,{FunctionComponent} from "react";
import {ITodo} from "../../store/TodoContext";
import {TodoStore} from "../../store/pullState/TodoStore";
import TodoPullState from "./TodoPullState";

const TodosPullState: FunctionComponent = () => {
    const todo = TodoStore.useState(t => t.todo)
    return (
        <div className="flex flex-row flex-wrap">
            {todo.map((todoItem: ITodo) =>
                <TodoPullState todo={todoItem} key={todoItem.id}/>
            )}
        </div>
    )
}

export default TodosPullState;