import { Route, Routes } from 'react-router-dom'
import App from './App'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'


import React from 'react'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<App/>} />
                <Route exact path="/1" element={<App1/>} />
                <Route exact path="/2" element={<App2/>} />
                <Route exact path="/3" element={<App3/>} />
                <Route exact path="/4" element={<App4/>} />
                <Route exact path="/5" element={<App5/>} />
            </Routes>

        </>
    )
}

export default Routing
