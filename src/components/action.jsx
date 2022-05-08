export const ADD_COUNTER="ADD_COUNTER";
 export const REDUCE_COUNTER="REDUCE_COUNTER";
export const ADD_TODO="ADD_TODO";
export const Addcounter=(data)=>{

    return{
        type:ADD_COUNTER,
        payload:data,
    }
} 

export const Reducecounter=(payload)=>{
    
    return{
        type:REDUCE_COUNTER,
        payload
    }
}

export const addtodo=(data)=>{
    return{

        type:ADD_TODO,
        payload:data,
    }
    
};