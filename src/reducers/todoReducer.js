import {ADD_TODO} from '../actions/actionType';

const initialize=[{title:'movie',description:'theatre'}]

const todoReducer = (state=initialize,action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state,action.todo]  
        default:
            return state;    
    }
}
export default todoReducer;