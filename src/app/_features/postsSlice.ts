import { createAppSlice } from "@/app/reduxLib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Post, User } from "../_utils/types";


export interface SliceState {
    allPosts: Post[];
    selectedPost: Post;
    dialogOpen: boolean;
    userSearchText: string;
    selectedUser: User | null;
    filteredUsers: User[];
}

const initialState: SliceState = {
    allPosts: [],
    dialogOpen: false,
    selectedPost: { userId: 0, id: 0, title: "", body: "" },
    userSearchText: "",
    selectedUser: null,
    filteredUsers: []
};

export const postsSlice = createAppSlice({
    name: 'posts',
    initialState,
    reducers: (create) => ({
        setAllPosts: create.reducer((state, action: PayloadAction<any[]>) => {
            state.allPosts = action.payload
        }),
        setSelectedPost: create.reducer((state, action: PayloadAction<Post>) => {
            state.selectedPost = action.payload
        }),
        setDialogOpen: create.reducer((state, action: PayloadAction<boolean>) => {
            state.dialogOpen = action.payload
        }),
        setUserSearchText: create.reducer((state, action: PayloadAction<string>) => {
            state.userSearchText = action.payload
        }),
        setSelectedUser: create.reducer((state, action: PayloadAction<User | null>) => {
            state.selectedUser = action.payload
        }),
        setFilteredUsers: create.reducer((state, action: PayloadAction<User[]>) => {
            state.filteredUsers = action.payload
        })
    })
})

export const { setAllPosts, setDialogOpen, setSelectedPost, setUserSearchText, setSelectedUser, setFilteredUsers } = postsSlice.actions