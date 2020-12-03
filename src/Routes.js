import React,{useContext} from 'react'
import {AppContext} from './context/AppContext'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import CreateUser from './features/Admin/CreateUser/CreateUser'
import LayoutComponent from './components/Layout'
import Question from './features/Admin/Question/Question'
import CreateTag from './features/Admin/CreateTag/CreateTag'
import Contest from './features/Admin/Contest/Contest'
import ModalComponent from './components/Modal/ModalComponent'
import ModalUpdate from './components/Modal/ModalUpdate'
import ModalQuestion from './components/Modal/ModalQuestion'

export default function Routes(){
    const {isModal,isModalUpdate,isModalQuestion} = useContext(AppContext) 
    return(
        <BrowserRouter>
            <LayoutComponent>
                <Switch>
                    <Route path="/" exact component={CreateUser}/>    
                    <Route path="/createquestion" exact component={Question}/>  
                    <Route path="/createtag" exact component={CreateTag}/> 
                    <Route path="/contest" exact component={Contest}/> 
                </Switch>
            </LayoutComponent>
            <ModalComponent/>
            <ModalUpdate/>
            <ModalQuestion/>
        </BrowserRouter>
    )
}