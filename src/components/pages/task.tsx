import { selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hooks"


export default function Task() {
  const tasks = useAppSelector(selectTasks)

  console.log(tasks)
  return (
    <div>task</div>
  )
}
