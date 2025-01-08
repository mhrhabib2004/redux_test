import { Button } from "@/components/ui/button";
import { ITask } from "@/types";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Trash2 } from "lucide-react";

interface IProps {
    task : ITask
}
export default function TaskCard({task }: IProps) {
  return (
    <div className="border px-6 py3 rounded-md">
        <div className="flex justify-between items-center ">
            <div className="flex gap-2 items-center">

                <div className="size-3 rounded-full bg-green-500"></div>
                <h1>task</h1>

            </div>
            <div className="flex gap-3 items-center">
                <Button variant="link" className="p-0 text-red-500">
                    <Trash2 />

                </Button>
                <Checkbox />

            </div>

        </div>
        <p className="mt-5">drescription</p>
    </div>
  )
}
