import axios from "./axious";
import { SAVE_ARRAY } from "./actions-type";
import {baseUrl} from "../constant";
export const saveArray=array=>{
    return {
        type:SAVE_ARRAY,
        array

    }
}
export const getArray =()=>{
    return (dispatch)=>{
        try{
            const headers ={
            'Content-Type':'application/json'
            }
axios.get(`${baseUrl}square`,{headers})
.then((response)=>{
    const arr=response.rows;
    console.warn("arr",arr)
  console.log(arr)
})
        }
catch(e){
    console.log("error" ,e)
}
    }
}
