import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/authSlice'
import restData from './restData/restDataSlice'

const store = configureStore({
    reducer:{auth,restData}
})

export default store