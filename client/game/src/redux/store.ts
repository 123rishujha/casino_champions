import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { legacy_createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



import { chanceReducer } from './chances/chances.reducer';

const rootReducer = combineReducers({
    chanceReducer,
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType< typeof store.getState>;




type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;