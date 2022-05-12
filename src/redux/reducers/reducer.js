import SAVE_ARRAY from "../actions/actions-type"


const initialState={
    array:[]
}
export function reducer(state=initialState,action){
    switch(action.type){
case SAVE_ARRAY:
    return {...state ,array:action.array}
    default:
        return state;


    }
}