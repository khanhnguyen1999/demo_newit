import React, { createContext, useState,useReducer } from "react";


const initialState = {
  data : [],
  isLoading: false,
  isModal : false
}

const reducer = (state=initialState,action)=>{
  switch (action.type){
    case "LOADING_DATA":
      return {
        todos:action.payload
      }
    case "SHOW_MODAL":
        return {
            isModal:action.payload
        }
    default:
      return state;
  }
}


export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [{data,isLoading,showModal},dispatch]=useReducer(reducer,initialState)
  const showModal = ()=>{
      dispatch({type:"SHOW_MODAL",payload:true})
  }
  const hideModal = ()=>{
    dispatch({type:"SHOW_MODAL",payload:false})
}
  return (
    <AppContext.Provider value={{
        data,
        isLoading,
        isModal,
        showModal,
        hideModal
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
