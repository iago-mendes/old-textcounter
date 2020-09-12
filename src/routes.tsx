import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import './styles.css'
import MenuTabs from './components/MenuTabs'
import Home from './pages/Home'
import About from './pages/About'

function Routes()
{
    return (
        <>
            <BrowserRouter>
                <MenuTabs />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </BrowserRouter>
        </>
    )
}

export default Routes