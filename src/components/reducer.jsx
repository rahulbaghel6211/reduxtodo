import {ADD_COUNTER,REDUCE_COUNTER,ADD_TODO}from "./action";
// const initstate={
//     counter:1
// }

const Reducer=(store,{type,payload})=>{
     switch(type){
     case ADD_COUNTER:
         return{
             ...store,
             counter:store.counter+payload
         };
        case REDUCE_COUNTER:
            return {
                ...store,
                counter:store.counter-payload
            };
            case ADD_TODO:
                return {...store,todos:[store.todos,payload]}
            default:
                return store;
   }
}
export {Reducer}