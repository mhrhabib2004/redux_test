import { selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hooks"
import TaskCard from "../module/task/taskCard"



export default function Task() {
  const tasks = useAppSelector(selectTasks)

  console.log(tasks)
  return (
    <div className="mx-auto max-w-7xl px-5 mt-2">
      <div>
        <h1>Task</h1>
      </div>
      <div className="space-y-5 mt-5">
        {
          tasks.map((task)=>(
            <TaskCard key={task.id} task={task}/>
          ))
        }

      </div>

    </div>
  )
}
