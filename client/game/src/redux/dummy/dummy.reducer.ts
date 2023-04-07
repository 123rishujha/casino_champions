import * as types from './dummy.types';
import { AuthAction } from './dummy.actions';




export interface DummyState {
    dummy: boolean;
}

const initalState = {
    dummy: false
}


export const dummyReducer = (state:DummyState = initalState, action:AuthAction):DummyState =>{
    const { type } = action;
    switch(type){
        default : {
            return state
        }
    }   
}

