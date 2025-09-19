import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useAppDispatch, useAppSelector } from "@/app/reduxLib/hooks";
import { setDialogOpen } from "@/app/_features/postsSlice";



export function PostDialog() {
  const dispatch = useAppDispatch()
  const { selectedPost, dialogOpen } = useAppSelector(state => state.posts)
  return (
    <Dialog open={dialogOpen}>
      <form>
        <DialogContent className="sm:max-w-[425px] min-h-[25%] flex flex-col gap-12 py-12" showCloseButton={false}>
          <DialogHeader className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Title</h1>
            <DialogTitle>{selectedPost.title}</DialogTitle>
            <h1 className="text-2xl font-bold">Description</h1>
            <DialogDescription>
              {selectedPost.body}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => dispatch(setDialogOpen(false))}>Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
