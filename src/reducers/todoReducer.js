import { v4 as uuidv4 } from 'uuid';
import { ADD, DELETE } from '../action/taypes';

const todo=[
    {
        id:uuidv4(),
        complete:false,
        title:"task"
    }
]

const todoReducer=(state=todo,action)=>{
switch (action.payload) {
//[...state, {title:action.payload, id:uuidv4(),complete:false }]

    case ADD: return  [{...state, title:action.payload, id:uuidv4(),complete:false }]

    //state.push(action.payload)
    case DELETE: return state.filter(el=>el.id!==action.payload)
        

    default: return state

        
}

}
export default todoReducer
































