import { DOCTORS_FAILURE, DOCTORS_REQUEST, GET_DOCTORS } from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    doctors:[],
    loginData:[]
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case DOCTORS_REQUEST:
            return {...state, isLoading:true}
        case DOCTORS_FAILURE:
            return {...state, isLoading:false, isError:true} 
        case GET_DOCTORS:
            return {...state, isError:false, isLoading:false, doctors:payload}
        default:
           return state
    }
}