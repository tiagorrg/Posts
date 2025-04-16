import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: 0
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state, action) => {

        },
        registration: (state, action) => {

        }
    }
})

export const { login, logout, registration} = authSlice.actions

export default authSlice.reducer