import { combineReducers } from "redux";
import {createReducer} from '@reduxjs/toolkit';
import actions from './todos-actions';


const items =createReducer([],{
    [actions.addTodo]:(state,{payload})=>[...state,payload],
    [actions.deleteTodo]:(state,{payload})=>
    state.filter(({id})=>id !== payload),
    });
  
const filter=createReducer('', {
    [actions.changeFilter]:
    (_,{payload})=>payload,
});
 
export default combineReducers ({
    items,
    filter,
});
