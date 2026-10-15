import type { GlobalTaskListItemJsonApiData } from "../api/api"


type TaskItemProps = {
  task: GlobalTaskListItemJsonApiData
  onTaskSelect: (taskId: string | null, boardId: string | null) => void
  isSelected: boolean
}

export function TaskItem({ task, onTaskSelect, isSelected }: TaskItemProps) {

  const getTaskColorPriority = (priority: number) => {
    switch (priority) {
      case 0:
        return '#ffffff'
      case 1:
        return '#ffd7b5';
      case 2:
        return '#ffb38a';
      case 3:
        return '#ff9248';
      case 4:
        return '#ff6700';
      default:
        return '#ffffff';
    }
  }

  const handleTaskSelect = () => {
    onTaskSelect?.(task.id, task.attributes.boardId);
  }

  return (
    <div key={task.id} onClick={handleTaskSelect} className='app-task' style={{
      background: getTaskColorPriority(task.attributes.priority),
      border: isSelected ? '5px solid blue' : 'none'
    }}>
      <strong>Заголовок: </strong> <span style={{ textDecorationLine: task.attributes.status === 2 ? 'line-through' : 'none' }}>{task.attributes.title}</span> <br></br>
      <strong>Статус: </strong> <input type='checkbox' defaultChecked={task.attributes.status === 2} /> <br></br>
      <strong>Дата создания задачи: </strong> {new Date(task.attributes.addedAt).toLocaleDateString()}
    </div>
  )
}