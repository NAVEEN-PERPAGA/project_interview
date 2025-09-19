"use client"

import PostCard from "@/app/_ui/posts/postCard";
import { useAppSelector, useAppDispatch } from "@/app/reduxLib/hooks";
import { fetchAllPosts } from "@/app/_reduxFunctions/posts";
import { useEffect } from "react";
import { PostDialog } from "@/app/_ui/posts/postDialog";
import { SearchByUser } from "@/app/_ui/posts/searchByUser";
import { fetchAllUsers } from "@/app/_reduxFunctions/user";

export default function Posts() {
    const { allPosts, selectedUser } = useAppSelector((state) => state.posts);
    const { allUsers } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!allPosts.length) {
            dispatch(fetchAllPosts());
        }
        if (!allUsers.length) {
            dispatch(fetchAllUsers());
        }
    }, [allPosts, allUsers]);
    return (
        <div
            className={`
                flex flex-col gap-12 p-12 w-full
            `}
        >
            <h1 className="text-2xl font-bold">Posts</h1>
            <SearchByUser />
            <div
                className={`
                    flex flex-wrap gap-4 pb-12
                `}
            >
                {
                    allPosts
                        .filter((post) => {
                            if (selectedUser) {
                                return post.userId === selectedUser.id
                            }
                            return true
                        })
                        .map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
            </div>
            <PostDialog />
        </div>
    );
}