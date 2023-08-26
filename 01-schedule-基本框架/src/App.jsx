import React, { memo, useState } from 'react'

const App = memo(() => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h2>App</h2>
            <div>{counter}</div>
            <button onClick={() => counter + 1}>+1</button>
        </div>
    )
})

export default App