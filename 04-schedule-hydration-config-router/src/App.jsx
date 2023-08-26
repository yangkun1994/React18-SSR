import React, { memo, useState } from 'react'
import { useRoutes, Link } from 'react-router-dom'

import routes from './router'

const App = memo(() => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h2>App</h2>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <div className="nav">
                <Link to='/home'>home</Link>
                <Link to='/about'>about</Link>
            </div>
            <div className="content">
                { useRoutes(routes) }
            </div>
        </div>
    )
})

export default App