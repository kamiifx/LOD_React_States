import React, {FunctionComponent, useState} from "react";

export interface ITodo{
    id: number
    title: string,
    description: string,
    author: string,
}

interface InputElements {
    children?: React.ReactNode,
}

const TodoContext = React.createContext([] as ITodo[])

const TodoContextProvider: FunctionComponent<InputElements> = ({ children }) => {
    const [todo,setTodo] = useState<ITodo[]>([])

    return (
        <TodoContext.Provider value={{todo,setTodo}}>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;

export const useTodoContext = () => React.useContext(TodoContext)