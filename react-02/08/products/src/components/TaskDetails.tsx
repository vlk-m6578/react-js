import { useEffect, useState } from "react";

type TaskDetailsData = {
  id: string
  attributes: TaskDetailsDto
}

type TaskDetailsDto = {
  title: string
  description: string | null
}

type TaskDetailsProps = {
  selectedTaskId: string | null
  boardId: string | null
}

export function TaskDetails({ selectedTaskId, boardId }: TaskDetailsProps) {
  const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null);

  useEffect(() => {

    if (!selectedTaskId) {
      setSelectedTask(null);
      return;
    }

    fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
      headers: {
        'api-key': 'd3a87c43-74d4-4047-baf4-7c9d4dbb9a5b'
      }
    }).then(res => res.json()).then(data => setSelectedTask(data.data));
  }, [selectedTaskId])

  return (
    <div style={{ border: '5px solid blue', padding: '10px' }}>
      <h3>Task details</h3>
      {
        selectedTask?.id === selectedTaskId ? (
          <div>
            {selectedTask.attributes.title}
            <p>{!selectedTask.attributes.description ? 'no description' : selectedTask.attributes.description}</p>
          </div>
        ) : selectedTaskId === null ? 'Task is not selected' : 'Loading...'
      }
    </div>
  )
}