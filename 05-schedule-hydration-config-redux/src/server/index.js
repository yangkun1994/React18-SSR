const express = require('express')

// ssr 相关的包
import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'

import App from '../App.jsx'
import store from '../store'

const app = express()

app.use(express.static("build"))

app.get('/', (req, res, next) => {
    console.log('req.url', req.url)
    // 利用 react 提供的 SSR 的功能包，对 App 处理， AppHtmlString 就是 react 开发的 SPA 页面，被转化成了字符串，目前是静态页面，还需要最 hydration 处理
    const AppHtmlString = ReactDOM.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    )

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>React18 + SSR</h1>
                <div id='root'>${AppHtmlString}</div>
                <script src='/client/client_bundle.js'></script>
            </body>
        </html>
    `)
})

app.listen(8000, () => {
    console.log('express 服务器启动了！')
})