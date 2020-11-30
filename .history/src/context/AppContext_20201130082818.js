import React, { createContext, useState,useReducer } from "react";


const initialState = {
  data : [],
  isLoading: false,
}

const reducer = (state=initialState,action)=>{
  switch (action.type){
    case "LOADING_DATA":
      return {
        todos:action.payload
      }
    default:
      return state;
  }
}


export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [{data,isLoading},dispatch]=useReducer(reducer,initialState)
  return (
    <AppContext.Provider value={{
        data,
        isLoading
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
