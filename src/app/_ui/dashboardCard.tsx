import Link from "next/link";


export default function DashboardCard({ title, count, link, icon }: { title: string, count: number, link: string, icon: any }) {
    const Icon = icon;
    return (
        <Link
            href={link}
            className="p-12 w-[40%] flex flex-col gap-12 hover:bg-gray-600 transition-all cursor-pointer rounded-xl bg-gray-700 min-h-[12rem]"
        >
            <div className="flex gap-4 items-center">
                <Icon size={48} />
                <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <h2 className="text-5xl font-bold text-gray-400">{count}</h2>
        </Link>
    );
}