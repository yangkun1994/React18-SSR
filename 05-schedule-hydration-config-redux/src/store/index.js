import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './features/home'
import aboutReducer from './features/about'

const store = configureStore({
    reducer: {
        home: homeReducer,
        about: aboutReducer
    }
})

export default store