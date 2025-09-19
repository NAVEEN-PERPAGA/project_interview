import type { Metadata } from "next";
import "@/app/globals.css";
import Sidebar from "@/app/_ui/sidebar";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard with Users and Posts",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`
                flex h-screen w-full
            `}
        >
            <Sidebar />
            {children}
        </div>
    );
}
