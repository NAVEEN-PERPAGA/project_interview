import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAllUsers } from "../_features/userSlice";
import type { AppDispatch } from "@/app/reduxLib/store";
import axios from "axios";



export const fetchAllUsers = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
    'user/fetchAllUsers',
    async (
        _: void,
        { dispatch }
    ) => {
        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(setAllUsers(response.data))
            })
            .catch((error) => console.log(error))
    }
)

// export const updateUserData = createAsyncThunk<void, void, { state: RootState; dispatch: AppDispatch }>(
//     'user/updateUserData',
//     async (
//         _: void,
//         { getState, dispatch }
//     ) => {
//         const state = getState()
//         const { user_id } = state.users
//         if (user_id) {
//             await PATCH('images_ai/user_generated_images/updatePerformanceImages', { user_id })
//         }
//     }
// )

