import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '../App.jsx'

// ❗️ ssr 项目这里用的是 ReactDOM.hydrateRoot
hydrateRoot(document.querySelector('#root'), 
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
