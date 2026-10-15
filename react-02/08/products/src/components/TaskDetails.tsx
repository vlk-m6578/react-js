import { useEffect, useState } from "react";
import { getTask, type TaskDetailsData } from "../api/api";

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

    getTask(boardId, selectedTaskId).then(data => setSelectedTask(data.data));
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