import {Store, useStoreState} from "pullstate";
import {ITodo} from "../TodoContext";

interface ITodoStore {
    todo: ITodo[],
    modal: boolean,
}

export const TodoStore = new Store<ITodoStore>({
    todo: [],
    modal: false
})

export const createTodo = (todoItem: ITodo) => {
    TodoStore.update(t => {
        t.todo.push(todoItem);
    })
}

export const deleteTodo = (todoItem: ITodo) => {
    TodoStore.update(t => {
        t.todo = t.todo.filter(t => t.id !== todoItem.id)
    })
}