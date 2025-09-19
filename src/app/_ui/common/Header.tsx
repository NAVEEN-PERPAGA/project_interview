"use client"

import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/app/reduxLib/hooks";
import { User } from "lucide-react";
import { setUser } from "@/app/_features/userSlice";

export default function Header() {
    const router = useRouter()
    const { user } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    return (
        <div
            className={`
                flex items-center justify-between p-4 fixed w-full top-0 z-50
                bg-gray-800 text-white font-bold
            `}
        >
            <h1>Admin Dashboard</h1>
            <div>
                {
                    user.username ? (
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2 px-12">
                                <User className="w-6 h-6 bg-gray-500 rounded-full p-1" />
                                <p>{user.username}</p>
                            </div>
                            <button
                                onClick={() => {
                                    router.push('/login')
                                    dispatch(setUser({ username: '', password: '' }))
                                } }
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => router.push('/login')}
                        >Login</button>
                    )
                }
            </div>
        </div>
    )
}