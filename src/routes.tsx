import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

function Routes()
{
    return (
        <BrowserRouter>
            <Route exact path="/" component={() => <p>Home</p>} />
            <Route path="/about" component={() => <p>About</p>} />
        </BrowserRouter>
    )
}

export default Routes