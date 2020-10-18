import React, { useEffect, useState } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import GoogleAnalytics from 'react-ga'

import './styles.css'
import MenuTabs from './components/MenuTabs'
import Home from './pages/Home'
import About from './pages/About'

function Routes()
{
    const [isDark, setIsDark] = useState(false)

    useEffect(() =>
    {
        GoogleAnalytics.initialize('UA-179691537-1')
        GoogleAnalytics.pageview(window.location.pathname)
    }, [])

    return (
        <>
            <BrowserRouter>
                <MenuTabs isDark={isDark} setIsDark={setIsDark} />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={() => <About isDark={isDark} />} />
            </BrowserRouter>
        </>
    )
}

export default Routes