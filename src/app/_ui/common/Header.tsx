"use client"

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/reduxLib/hooks";
import { User } from "lucide-react";

export default function Header() {
    const router = useRouter()
    const { user } = useAppSelector((state) => state.user)
    console.log(user)
    return (
        <div
            className={`
                flex items-center justify-between p-4
                bg-gray-900 text-white font-bold
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
                                onClick={() => router.push('/login')}
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