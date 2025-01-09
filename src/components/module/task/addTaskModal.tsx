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
import { Input } from "@/components/ui/input"
import { Form, useForm } from "react-hook-form"

export function AddTaskModal() {
  const form = useForm();
  const onsubmit = (data)=>{
    console.log(data)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <Form {...form}>
       <form onSubmit={form.handleSubmit(onsubmit)}>
       <FormField
    control={form?.control}
    name="titel"
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
         <Input />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
   <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
       </form>
       
        </Form>
      </DialogContent>
    </Dialog>
  )
}
