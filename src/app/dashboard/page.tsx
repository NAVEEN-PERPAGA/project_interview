"use client"
import { useEffect } from "react";
import { fetchAllUsers } from "@/app/_reduxFunctions/user";
import { useAppDispatch } from "../reduxLib/hooks";
import { fetchAllPosts } from "../_reduxFunctions/posts";
import { useAppSelector } from "../reduxLib/hooks";
import DashboardCard from "../_ui/dashboardCard";
import { Users, Newspaper } from "lucide-react";

export default function Dashboard() {
    const { allUsers } = useAppSelector((state) => state.user);
    const { allPosts } = useAppSelector((state) => state.posts);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllPosts());
    }, [])
    return (
        <div
            className={`
                flex flex-col gap-12 bg-gray-800 p-12 w-full ml-[25%]
            `}
        >
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="flex gap-12">
                <DashboardCard
                    title="Users"
                    count={allUsers.length}
                    link="/dashboard/users"
                    icon={Users}
                />
                <DashboardCard
                    title="Posts"
                    count={allPosts.length}
                    link="/dashboard/posts"
                    icon={Newspaper}
                />
            </div>
        </div>
    );
}

