import React, { memo, useState } from 'react'

const App = memo(() => {
    console.log(2222222)
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h2>App</h2>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
        </div>
    )
})

export default App