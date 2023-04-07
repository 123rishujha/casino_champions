import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { legacy_createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



import { dummyReducer } from './dummy/dummy.reducer';

const rootReducer = combineReducers({
    dummyReducer,
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType< typeof store.getState>;




type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;