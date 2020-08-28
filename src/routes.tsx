import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import './styles.css'
import MenuTabs from './components/MenuTabs'

function Routes()
{
    return (
        <>
            <MenuTabs />
            <BrowserRouter>
                <Route exact path="/" component={() => <p>Home</p>} />
                <Route path="/about" component={() => <p>About</p>} />
            </BrowserRouter>
        </>
    )
}

export default Routes