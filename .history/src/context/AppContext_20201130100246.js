import React, { createContext, useState,useReducer } from "react";


const initialState = {
  data : [],
  isLoading: false,
  isModal : false,
  getId:null
}

const reducer = (state=initialState,action)=>{
  switch (action.type){
    case "LOADING_DATA":
      return {
        todos:action.payload
      }
    case "SHOW_MODAL":
        return {
            ...state,
            isModal:action.payload
        }
    case "GET_ID":
        return {
            ...state,
            getId:action.payload
        }
    default:
      return state;
  }
}


export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [{data,isLoading,isModal},dispatch]=useReducer(reducer,initialState)
  const _showModal = ()=>{
    dispatch({type:"SHOW_MODAL",payload:true})
  }
  const _hideModal = ()=>{
        dispatch({type:"SHOW_MODAL",payload:false})
    }
    const _getId = (id)=>{
        dispatch({type:"GET_ID",payload:id})
    }
  return (
    <AppContext.Provider value={{
        data,
        isLoading,
        isModal,
        _showModal,
        _hideModal
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
