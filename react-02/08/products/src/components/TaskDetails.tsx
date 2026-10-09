import { useEffect, useState } from "react";

export function TaskDetails({selectedTaskId, boardId}) {
  const [selectedTask, setSelectedTask] = useState(null);

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