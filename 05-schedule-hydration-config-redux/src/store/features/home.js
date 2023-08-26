import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeData = createAsyncThunk('fetchHomeData', async (payload, {dispatch, getState}) => {
    const res = await axios.get('http://codercba.com:9060/juanpi/api/homeInfo')

    return res.data
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        counter: 0,
        homeInfo: {}
    },
    reducers: {
        addNum(state, { payload }) {
            state.counter = state.counter + payload
        },
        subNum(state, { payload }) {
            state.counter = state.counter - payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHomeData.pending, (state, action) => {
            console.log('etchHomeMutiDataAction.pending')
        }).addCase(fetchHomeData.fulfilled, (state, {payload}) => {
            console.log('payload', payload)
            // 参数 payload 是异步请求后返回的数据  => res.data
            state.homeInfo = payload
        })
    }
})

export const { addNum, subNum } = homeSlice.actions

export default homeSlice.reducer