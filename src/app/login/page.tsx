"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from "../reduxLib/hooks";
import { setUser } from "../_features/userSlice";

export default function Login() {
    const [userDetails, setUserDetails] = useState({ username: '', password: '' })
    const router = useRouter()
    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!userDetails.username || !userDetails.password) {
            return
        }
        dispatch(setUser(userDetails))
        router.push('/dashboard')
    }

    return (
        <div
            className={`
                flex flex-col gap-12 bg-gray-800 p-12 rounded-xl w-[50%]
            `}
        >
            <h1 className="text-4xl font-bold">Enter Login details to continue</h1>

            <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
                <label className="text-xl font-semibold flex flex-col gap-2">
                    Username
                    <input
                        type='text'
                        value={userDetails.username}
                        onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                        className={`
                            bg-gray-500 rounded-md p-2
                            border-2 border-gray-400
                        `}
                        required
                    />
                </label>
                <label className="text-xl font-semibold flex flex-col gap-2">
                    Password
                    <input
                        type='text'
                        value={userDetails.password}
                        onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                        className={`
                            bg-gray-500 rounded-md p-2
                            border-2 border-gray-400
                        `}
                        required
                    />
                </label>
                <Button
                    type="submit"
                    className={`
                        bg-black rounded-md px-12 py-6
                        w-fit font-bold text-xl
                        hover:bg-gray-600 transition-all cursor-pointer
                    `}
                >
                    Login
                </Button>
            </form>
        </div>
    );
}