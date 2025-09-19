export default async function UsersDetailsById({ params }: { params: { id: string } }) {
    console.log(params.id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    console.log(data)
    return (
        <div
            className={`
                flex flex-col gap-12 bg-gray-800 p-12 w-full
            `}
        >
            <h1 className="text-2xl font-bold">User Details</h1>

            <div className="flex flex-col gap-6 bg-gray-700 w-[50%] px-24 py-12 rounded-lg">
                <h2 className="text-4xl font-bold">{data.name}</h2>
                <UserInfo field={data.email} label="Email" />
                <UserInfo field={data.phone} label="Phone" />
                <UserInfo field={data.website} label="Website" />
                <UserInfo field={data.company.name} label="Company" />
                <UserInfo field={data.address.city} label="City" />
                <UserInfo field={data.address.street} label="Street" />
                <UserInfo field={data.address.zipcode} label="Zipcode" />
            </div>
        </div>
    );
}

const UserInfo = ({ field, label }: { field: string; label: string }) => {
    return (
        <p className="text-white font-bold text-lg">{label}: {field}</p>
    )
}