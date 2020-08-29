import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import './styles.css'
import MenuTabs from './components/MenuTabs'
import Home from './pages/Home'

function Routes()
{
    return (
        <>
            <BrowserRouter>
                <MenuTabs />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={() => <p>About</p>} />
            </BrowserRouter>
        </>
    )
}

export default Routes