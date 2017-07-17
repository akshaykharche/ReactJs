import React from "react";
import {render} from "react-dom";

import {createStore ,combineReducers,applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import { App } from './app/components/App';

const mathReducer=(state={
    result:1,
    lastValues:[]
},action) =>{
    switch(action.type){
        case "ADD":
        state={
            ...state,
            result:state.result+action.payload,
            lastValues:[...state.lastValues,action.payload]
        };
         
        break;
        case "SUBSTRACT":
           state={
            ...state,
            result:state.result-action.payload,
            lastValues:[...state.lastValues,action.payload]
        };
        break;
    }
    return state;
}

const userReducer=(state={
    name:"Akshay",
    age:27
},action) =>{
    switch(action.type){
        case "SET_NAME":
        state={
            ...state,
           name:action.payload
        };
         
        break;
        case "SET_AGE":
           state={
            ...state,
             age:action.payload
        };
        break;
    }
    return state;
}

const myLogger=(store) =>(next)=>(action) =>{
    console.log("Logged Action",action);
    next(action);
}

const store=createStore(combineReducers(
    {mathReducer,userReducer}),
    {},
    applyMiddleware(createLogger()));
 store.subscribe(()=>{
        //console.log("store updated", store.getState());
 });
     

 render(<App />, window.document.getElementById('app'));