"use client"

import { useAppSelector, useAppDispatch } from "@/app/reduxLib/hooks";
import { fetchAllUsers } from "@/app/_reduxFunctions/user";
import { useEffect } from "react";
import { DataTable } from "@/app/_ui/users/table";

export default function Users() {
    const { allUsers } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!allUsers.length) {
            dispatch(fetchAllUsers());
        }
    }, [allUsers]);

    return (
        <div
            className={`
                flex flex-col gap-12 p-12 w-full
            `}
        >
            <h1 className="text-2xl font-bold">Users</h1>
            <DataTable data={allUsers} />
            {/* <div
                className={`
                    flex flex-wrap gap-4
                `}
            >
                {allUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div> */}
        </div>
    );
}