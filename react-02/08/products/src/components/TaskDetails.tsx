import { useEffect, useState } from "react";

export function TaskDetails() {
  const [selectedTask, setSelectedTask] = useState(null);

  const selectedTaskId = '4f310604-82b5-4afd-b9a4-ddf12dfac0a3';
  const boardId = '13923117-72de-4788-a7f0-4c42f162a5ab';

  useEffect(() => {

    if (!selectedTaskId) return;

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