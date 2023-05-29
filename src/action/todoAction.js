import {ADD, DELETE ,UPDATE,  COMPLETE} from "./taypes";

export const addTodo = (input) => {
    return {
        type: ADD,
        payload: input
    };
};
export const deleteTodo = (id) => {
    return {
        type: DELETE,
        payload: id
    };
};