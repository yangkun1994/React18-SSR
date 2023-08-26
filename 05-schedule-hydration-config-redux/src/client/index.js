import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '../App.jsx'
import store from '../store'

// ❗️ ssr 项目这里用的是 ReactDOM.hydrateRoot
hydrateRoot(document.querySelector('#root'),
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
