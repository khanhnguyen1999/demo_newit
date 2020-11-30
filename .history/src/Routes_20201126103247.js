import React from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import CreateUser from './features/Admin/CreateUser/CreateUser'
import LayoutComponent from './components/Layout'
import CreateQuestion from './features/Admin/CreateQuestion/CreateQuestion'
import CreateTag from './features/Admin/CreateTag/CreateTag'

export default function Routes(){
    return(
        <BrowserRouter>
        <LayoutComponent>
            <Switch>
                <Route path="/" exact component={CreateUser}/>    
                <Route path="/createquestion" exact component={CreateQuestion}/>  
                <Route path="/createtag" exact component={CreateTag}/>  
            </Switch>
            </LayoutComponent>
        </BrowserRouter>
    )
}