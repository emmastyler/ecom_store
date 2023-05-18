import {createSlice} from '@reduxjs/toolkit'
import {toast} from "react-toastify";

const initialState = {
    user:[],
    status: null,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload
            state.status = 'success'
            localStorage.setItem('user', JSON.stringify(state.user));
        },

        logoutUser: (state, action) => {
            state.user = []
            state.status = 'success'
            localStorage.removeItem("user");
        },
       
    }
})
export const { getUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;