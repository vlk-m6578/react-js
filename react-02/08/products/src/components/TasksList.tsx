import { useEffect, useState } from "react";
import { TaskItem } from "./TaskItem";
import { getTasks, type GlobalTaskListItemJsonApiData } from "../api/api";

type TasksListProps = {
  selectedTaskId: string | null
  onTaskSelect: (taskId: string | null, boardId: string | null) => void
}

export function TasksList({ selectedTaskId, onTaskSelect }: TasksListProps) {
  const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null);

  useEffect(() => {
    getTasks().then(data => setTasks(data.data));
  }, []);

  if (tasks === null) {
    return <h1>Загрузка...</h1>
  }

  if (tasks.length === 0) {
    return <h1>Задачи отсутствуют</h1>
  }

  const handleResetClick = () => { onTaskSelect(null, null) }

  return (
    <div>
      <button onClick={handleResetClick}>reset</button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {
          tasks.map(task => {
            return (
              <TaskItem key={task.id} task={task} onTaskSelect={onTaskSelect} isSelected={selectedTaskId === task.id} />
            )
          })
        }
      </div>
    </div>
  )
}