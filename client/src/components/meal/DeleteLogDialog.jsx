import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"

const DeleteLogDialog = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger render={
                <Button variant="destructive" className="absolute size-12 right-0 top-1/2 -translate-y-1/2 rounded-md rounded-l-none"><Trash className="size-5!" /></Button>
            } />
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-medium text-red-700 text-lg">Delete</AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-col gap-1 mt-3 mb-3">
                        <span className="font-medium text-black">Sure you want to delete this food log?</span>
                        <span className="text-sm">This action cannot be undone</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="*:text-black *:p-5 *:rounded-full *:font-medium">
                    <AlertDialogCancel className="bg-gray-200 hover:bg-gray-300 border-none">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-themegreen hover:bg-themegreen">Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteLogDialog