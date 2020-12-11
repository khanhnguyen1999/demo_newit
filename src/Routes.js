import React,{useContext} from 'react'
import {AppContext} from './context/AppContext'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import 'react-notifications/lib/notifications.css';
import { ToastProvider, useToasts } from 'react-toast-notifications'

import CreateUser from './features/Admin/CreateUser/CreateUser'
import LayoutComponent from './components/Layout'
import Question from './features/Admin/Question/Question'
import CreateTag from './features/Admin/CreateTag/CreateTag'
import Contest from './features/Admin/Contest/Contest'


import ModalComponent from './components/Modal/ModalComponent'
import ModalUpdate from './components/Modal/ModalUpdate'
import ModalQuestion from './components/Modal/ModalQuestion'
import ModalUpdateQues from './components/Modal/ModalUpdateQues'
import ModalShowCartQues from './components/Modal/ModalShowCartQues'
import ModalDeleteExam from './components/Modal/ModalDeleteExam'


import CreateExam from './features/Admin/Contest/CreateExam'
import ViewQuestion from './features/Admin/Contest/ViewQuestion'


export default function Routes(){
    const {isModal,isModalUpdate,isModalQuestion} = useContext(AppContext) 
    return(
        <BrowserRouter>
            <ToastProvider>
                <LayoutComponent>
                    <Switch>
                        <Route path="/" exact component={CreateUser}/>    
                        <Route path="/createquestion" exact component={Question}/>  
                        <Route path="/createtag" exact component={CreateTag}/> 
                        <Route path="/contest" exact component={Contest}/> 
                        <Route path="/contest/createexam" exact component={CreateExam}/> 
                        <Route path="/contest/viewquestion/:id" exact component={ViewQuestion}/> 
                    </Switch>
                </LayoutComponent>
                <ModalComponent/>
                <ModalUpdate/>
                <ModalQuestion/>
                <ModalUpdateQues/>
                <ModalShowCartQues/>
                <ModalDeleteExam/>
            </ToastProvider>
        </BrowserRouter>
    )
}