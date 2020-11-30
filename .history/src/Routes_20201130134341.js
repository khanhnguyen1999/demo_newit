import React from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import CreateUser from './features/Admin/CreateUser/CreateUser'
import LayoutComponent from './components/Layout'
import Question from './features/Admin/CreateQuestion/Question'
import CreateTag from './features/Admin/CreateTag/CreateTag'

export default function Routes(){
    return(
        <BrowserRouter>
        <LayoutComponent>
            <Switch>
                <Route path="/" exact component={CreateUser}/>    
                <Route path="/createquestion" exact component={Question}/>  
                <Route path="/createtag" exact component={CreateTag}/>  
            </Switch>
            </LayoutComponent>
        </BrowserRouter>
    )
}