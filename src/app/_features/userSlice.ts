import { createAppSlice } from "@/app/reduxLib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/app/_utils/types";


export interface SliceState {
    allUsers: any[];
    user: User;
}

const initialState: SliceState = {
    allUsers: [],
    user: { username: '', password: '' }
};

export const userSlice = createAppSlice({
    name: 'user',
    initialState,
    reducers: (create) => ({
        setAllUsers: create.reducer((state, action: PayloadAction<any[]>) => {
            state.allUsers = action.payload
        }),
        setUser: create.reducer((state, action: PayloadAction<User>) => {
            state.user = action.payload
        })
    })
})

export const { setAllUsers, setUser } = userSlice.actions