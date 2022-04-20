import {atom} from "recoil";
import {ITodo} from "../TodoContext";

/*Atom is our initial state, as stated in the documentation is the "truth of our application"*/
export const todoListState = atom({
    key: 'TodoList', //Must be unique to the application
    default: [] as ITodo[], //Initial value
});

export const modalState = atom({
    key: 'IsModalOpen',
    default: false,
});


