import * as types from './dummy.types';
import { AppDispatch } from '../store';

//actions object func types
export type IDummyRequest = {
    type: typeof types.Request;
}

export type IDummyError = {
    type: typeof types.ERROR;
}

export type IDummyGetSuccess = {
    type: typeof types.GET_DUMMY_SUCCESS;
    payload: string;
}

export type AuthAction = IDummyRequest | IDummyError | IDummyGetSuccess; // will we used in reducer

//actions bojects 
export const dummyRequest  = ():IDummyRequest =>{
    return {type: types.Request}
}

export const dummyError  = ():IDummyError =>{
    return {type: types.ERROR}
}

export const GetDummySuccess  = (payload: string):IDummyGetSuccess =>{
    return {type: types.GET_DUMMY_SUCCESS,payload}
}


//main redux functon
export const GetDummies = (): any => async (dispatch:AppDispatch) => {
    dispatch(dummyRequest());
    try{
       // some api calls 
       const payload = "hello dummy";
       if(payload){
        dispatch(GetDummySuccess(payload));
       }
    }
    catch(e){
        console.log(e);
        dispatch(dummyError());
    }
}

