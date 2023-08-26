import React, { memo } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { addNum, fetchHomeData } from '../store/features/home'

const Home = memo(() => {
    const { counter } = useSelector((state) => {
        return {
            counter: state.home.counter
        }
    })

    const dispatch = useDispatch()


    return (
        <div>
            <h1>home</h1>
            <span>{counter}</span>
            <button onClick={() => dispatch(addNum(2))}>递增</button>
            <button onClick={() => dispatch(fetchHomeData())}>获取数据</button>
        </div>
    )
})

export default Home