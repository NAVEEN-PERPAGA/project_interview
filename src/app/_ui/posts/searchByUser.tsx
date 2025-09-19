import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/app/reduxLib/hooks"
import { setUserSearchText, setFilteredUsers, setSelectedUser } from "@/app/_features/postsSlice"
import { useAppSelector } from "@/app/reduxLib/hooks"
import { User } from "@/app/_utils/types"
import { useCallback, useRef } from "react"


export function SearchByUser() {
    const dispatch = useAppDispatch()
    const { userSearchText, filteredUsers } = useAppSelector((state) => state.posts)
    const { allUsers } = useAppSelector((state) => state.user)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const handleUserSelect = (user: User) => {
        dispatch(setSelectedUser(user))
        dispatch(setFilteredUsers([]))
        dispatch(setUserSearchText(user.name))
    }

    // Debounce Function
    const debouncedHandleUserSearch = useCallback((value: string) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        if (value === '') {
            dispatch(setFilteredUsers([]))
            dispatch(setUserSearchText(''))
            dispatch(setSelectedUser(null))
            return
        }
        timerRef.current = setTimeout(() => {
            if (allUsers.length) {
                const filteredUsers = allUsers.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
                dispatch(setFilteredUsers(filteredUsers))
            }
        }, 500)
    }, [allUsers])

    return (
        <div>
            <Input
                placeholder="Search by User..."
                className="w-[25%]"
                value={userSearchText}
                onChange={(e) => {
                    dispatch(setUserSearchText(e.target.value))
                    debouncedHandleUserSearch(e.target.value)
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
