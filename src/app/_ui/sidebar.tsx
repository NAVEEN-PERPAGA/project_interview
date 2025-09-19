"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <div
            className={`
                py-12 px-6 rounded-xl w-[25%] fixed bg-gray-900 h-full
            `}
        >
            <Link
                href="/dashboard"
                className={`
                    text-white font-bold rounded-xl px-4 py-2 hover:bg-gray-700
                    block w-full text-2xl
                `}
            >
                Admin Dashboard
            </Link>
            <hr className="my-4 border-gray-600" />
            <div className="space-y-6 py-12">
                <Link
                    href="/dashboard/users"
                    className={`
                        text-white font-bold rounded-xl px-4 py-2 hover:bg-gray-700
                        block w-full
                        ${pathname === '/dashboard/users' ? 'bg-gray-600' : 'bg-gray-800 '}
                    `}
                >
                    Users
                </Link>
                <Link
                    href="/dashboard/posts"
                    className={`
                        text-white font-bold rounded-xl px-4 py-2 hover:bg-gray-700
                        block w-full
                        ${pathname === '/dashboard/posts' ? 'bg-gray-600' : 'bg-gray-800 '}
                    `}
                >
                    Posts
                </Link>
            </div>
        </div>
    );
}