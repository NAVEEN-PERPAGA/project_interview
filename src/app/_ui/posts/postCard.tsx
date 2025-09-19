import { useAppDispatch } from "@/app/reduxLib/hooks";
import { setSelectedPost, setDialogOpen } from "@/app/_features/postsSlice";
import { useAppSelector } from "@/app/reduxLib/hooks";
import { Post } from "@/app/_utils/types";


export default function PostCard({ post }: { post: Post }) {
    const { userId, title, body: description } = post;
    const dispatch = useAppDispatch()
    const { allUsers } = useAppSelector((state) => state.user);
    const user = allUsers.find((user) => {
        return user.id === userId
    });
    return (
        <button
            className={`
                p-6 py-6 w-[40%]
                hover:bg-gray-600 transition-all cursor-pointer
                rounded-xl bg-gray-700
                min-h-[160px]
                text-left
            `}
            onClick={() => {
                dispatch(setSelectedPost(post))
                dispatch(setDialogOpen(true))
            }}
        >
            <div className="flex flex-col gap-2 justify-evenly h-full">
                <h1 className="text-lg font-bold">{title}</h1>

                <div>
                    <p className="text-sm text-gray-400">{description.slice(0, 60) + '...'}</p>
                </div>
                <p className="font-bold text-gray-400">By: {user?.name}</p>
            </div>
        </button>
    );
}