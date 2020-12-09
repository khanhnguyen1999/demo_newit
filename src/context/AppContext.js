import React, { createContext, useState,useReducer } from "react";


const initialState = {
  data : [],
  isLoading: false,
  isModal : false,
  isModalUpdate:false,
  isModalQuestion:false,
  getId:null,
  getIdQues:null,
  modalUpdateQues:false,
  modalShowQuestion:false
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
    case "GET_DATA":
      return {
        ...state,
        data:action.payload
      }
    case "SHOW_MODAL_QUES":
      return {
        ...state,
        isModalQuestion:action.payload
      }
    case "SHOW_MODAL_UPDATE":
      return {
        ...state,
        isModalUpdate:action.payload
      }
    case "HIDE_MODAL_QUES":
      return {
        ...state,
        isModalQuestion:action.payload
      }
    case "GET_ID_QUES":
      return {
        ...state,
        getIdQues:action.payload
      }
    case "SHOW_MODAL_UPDATE_QUESTION":
      return{
        ...state,
        modalUpdateQues:action.payload
      }
    case "SHOW_MODAL_QUESTION":
      return {
        ...state,
        modalShowQuestion:action.payload
      }
    default:
      return state;
  }
}


export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [{data,isLoading,isModal,modalShowQuestion,isModalUpdate,getId,getIdQues,isModalQuestion,modalUpdateQues},dispatch]=useReducer(reducer,initialState)
  const _showModalDelete = ()=>{
    dispatch({type:"SHOW_MODAL",payload:true})
  }
  const _getIdQues = (id)=>{
    dispatch({type:"GET_ID_QUES",payload:id})
  }
  const _showModalUpdate = ()=>{
    dispatch({type:"SHOW_MODAL_UPDATE",payload:true})
  }
  const _hideModalUpdate = ()=>{
    dispatch({type:"SHOW_MODAL_UPDATE",payload:false})
  }
  const _hideModal = ()=>{
        dispatch({type:"SHOW_MODAL",payload:false})
    }
    const _getId = (id)=>{
        dispatch({type:"GET_ID",payload:id})
    }
  const _getData = (data)=>{
    dispatch({type:"GET_DATA",payload:data})
  }
  const _showModalQues = ()=>{
    dispatch({type:"SHOW_MODAL_QUES",payload:true})
  }
  const _hideModalQues = ()=>{
    dispatch({type:"HIDE_MODAL_QUES",payload:false})
  }
  const _showModalUpdateQues = ()=>{
    dispatch({type:"SHOW_MODAL_UPDATE_QUESTION",payload:true})
  }
  const _hideModalUpdateQues = ()=>{
    dispatch({type:"SHOW_MODAL_UPDATE_QUESTION",payload:false})
  }
  const _showModalQuestion = ()=>{
    dispatch({type:"SHOW_MODAL_QUESTION",payload:true})
  }
  const _hideModalQuestion = ()=>{
    dispatch({type:"SHOW_MODAL_QUESTION",payload:false})
  }
  return (
    <AppContext.Provider value={{
        data,
        isLoading,
        isModal,
        getId,
        getIdQues,
        modalUpdateQues,
        isModalQuestion,
        isModalUpdate,
        modalShowQuestion,
        _getIdQues,
        _showModalQues,
        _showModalUpdateQues,
        _hideModalUpdateQues,
        _hideModalQues,
        _showModalDelete,
        _hideModalUpdate,
        _showModalUpdate,
        _hideModal,
        _getId,
        _getData,
        _showModalQuestion,
        _hideModalQuestion,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
