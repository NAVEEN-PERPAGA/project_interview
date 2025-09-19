import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "User Details",
    description: "Details of the user",
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
            {children}
        </div>
    );
}
