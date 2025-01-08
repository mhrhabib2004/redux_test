import { selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hooks"
import TaskCard from "../module/task/taskCard"


export default function Task() {
  const tasks = useAppSelector(selectTasks)

  console.log(tasks)
  return (
    <div className="">

    </div>
  )
}
