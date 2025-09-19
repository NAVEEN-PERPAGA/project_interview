import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/app/reduxLib/hooks"
import { setUserSearchText, setFilteredUsers, setSelectedUser } from "@/app/_features/postsSlice"
import { useAppSelector } from "@/app/reduxLib/hooks"
import { User } from "@/app/_utils/types"


export function SearchByUser() {
    const dispatch = useAppDispatch()
    const { userSearchText, filteredUsers } = useAppSelector((state) => state.posts)
    const { allUsers } = useAppSelector((state) => state.user)
    const handleUserSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            dispatch(setFilteredUsers([]))
            dispatch(setUserSearchText(''))
            dispatch(setSelectedUser(null))
            return
        }
        if (allUsers.length) {
            const filteredUsers = allUsers.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))
            dispatch(setFilteredUsers(filteredUsers))
        }
    }
    const handleUserSelect = (user: User) => {
        dispatch(setSelectedUser(user))
        dispatch(setFilteredUsers([]))
        dispatch(setUserSearchText(user.name))
    }

    return (
        <div>
            <Input
                placeholder="Search by User..."
                className="w-[25%]"
                value={userSearchText}
                onChange={(e) => {
                    dispatch(setUserSearchText(e.target.value))
                    handleUserSearch(e)
                }}
            />
            {filteredUsers.length ?
                <div className="absolute flex flex-col gap-2 bg-gray-100/10 p-4 rounded-xl mt-2 w-[25%] backdrop-blur-xl">
                    {filteredUsers.map((user) => (
                        <button
                            key={user.id}
                            onClick={() => handleUserSelect(user)}
                            className={`
                                text-white text-left hover:bg-gray-800
                                cursor-pointer px-6 py-2 rounded-xl
                            `}
                        >
                            {user.name}
                        </button>
                    ))}
                </div>
                :
                null
            }
        </div>
    )
}
