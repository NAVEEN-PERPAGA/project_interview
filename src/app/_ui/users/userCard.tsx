import { User } from "@/app/_utils/types";


export default function UserCard({ user }: { user: User }) {
    const { name, address: { city }, company: { name: companyName }, email, phone } = user;
    return (
        <div
            className={`
                p-6 py-6 w-[40%]
                hover:bg-gray-600 transition-all cursor-pointer
                rounded-xl bg-gray-700
                min-h-[120px]
            `}
        >


            <div className="flex gap-2 items-center justify-between">
                <h1 className="text-lg font-bold">{name}</h1>
                <p className="text-sm">{email}</p>
            </div>

            <div>
                <p className="text-sm text-gray-400">{city} City</p>
            </div>
            <p className="text-sm">{companyName} Company</p>
            <p className="text-sm">{phone}</p>
        </div>
    );
}