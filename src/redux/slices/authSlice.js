import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {

        },
        logout: (state, action) => {

        }
    }
})

export const { login, logout, registration} = authSlice.actions

export default authSlice.reducer