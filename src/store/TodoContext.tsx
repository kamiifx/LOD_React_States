import React, {FunctionComponent, SetStateAction, useState} from "react";
export interface ITodo{
    id: string,
    title: string,
    description: string,
    author: string,
}

interface ITodoContext {
    setTodo: React.Dispatch<SetStateAction<ITodo[]>>
    todo: ITodo[],
    setModal: React.Dispatch<SetStateAction<boolean>>,
    modal: boolean
    createTodo: (newTodo: ITodo) => void;
    deleteTodo: (todoItem: ITodo) => void;
}

interface InputElements {
    children?: React.ReactNode,
}

const TodoContext = React.createContext({} as ITodoContext)


const TodoContextProvider: FunctionComponent<InputElements> = ({ children }) => {
    const [todo,setTodo] = useState<ITodo[]>([])
    const [modal,setModal] = useState(false);

    /**
     *@param newTodo A todo Item
     *@returns Adds the todo to the todos Array
     */
    const createTodo = (newTodo: ITodo) => {
        setTodo([...todo, newTodo])
    }

    /**
     *@param todoItem The Todo Item to delete
     *@returns removes the assigned item from the todo array.
     */
    const deleteTodo = (todoItem: ITodo) => {
        const newTodos = todo.filter((todo) => todo.id !== todoItem.id)
        setTodo(newTodos);
    }

    return (
        <TodoContext.Provider value={{todo,setTodo,modal,setModal,createTodo, deleteTodo}}>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;

export const useTodoContext = () => React.useContext(TodoContext)