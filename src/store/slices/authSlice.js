import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    user: null,
    refresh: "",
    access: "",
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        },
        setRefresh: (state, action) => {
            state.refresh = action.payload
        },
        setAccess: (state, action) => {
            state.access = action.payload
        },
    }
})

export const {setUserData, setRefresh, setAccess} = authSlice.actions
export default authSlice.reducer