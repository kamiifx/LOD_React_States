import React, {FunctionComponent, SetStateAction, useState} from "react";

export interface ITodo{
    id: number
    title: string,
    description: string,
    author: string,
}

interface ITodoContext {
    setTodo: React.Dispatch<SetStateAction<ITodo[]>>
    todo: ITodo[],
    setModal: React.Dispatch<SetStateAction<boolean>>,
    modal: boolean
}

interface InputElements {
    children?: React.ReactNode,
}

const TodoContext = React.createContext({} as ITodoContext)


const TodoContextProvider: FunctionComponent<InputElements> = ({ children }) => {
    const [todo,setTodo] = useState<ITodo[]>([])
    const [modal,setModal] = useState(false);

    return (
        <TodoContext.Provider value={{todo,setTodo,modal,setModal}}>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;

export const useTodoContext = () => React.useContext(TodoContext)