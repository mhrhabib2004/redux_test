import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Form, useForm } from "react-hook-form"

export function AddTaskModal() {
  const from = useForm()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <Form {...from}>
        <FormField
    control={from.control}
    name="titel"
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
