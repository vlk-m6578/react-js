import { useEffect, useState } from "react";
import { TaskItem, type GlobalTaskListItemJsonApiData } from "./TaskItem";

type TasksListProps = {
  selectedTaskId: string | null
  onTaskSelect: (taskId: string | null, boardId: string | null) => void
}

export function TasksList({ selectedTaskId, onTaskSelect }: TasksListProps) {
  const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null);

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': 'd3a87c43-74d4-4047-baf4-7c9d4dbb9a5b'
      }
    }).then(res => res.json()).then(data => setTasks(data.data));
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