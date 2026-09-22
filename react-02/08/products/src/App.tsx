import { useEffect, useState } from 'react'
import './App.css'

export function App() {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': 'd3a87c43-74d4-4047-baf4-7c9d4dbb9a5b'
      }
    }).then(res => res.json()).then(data => setTasks(data.data));
  }, []);

  const getTaskColorPriority = (priority) => {
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

  if (tasks === null) {
    return <h1>Загрузка...</h1>
  }

  if (tasks.length === 0) {
    return <h1>Задачи отсутствуют</h1>
  }

  return (
    <div className='app-tasks'>
      <button onClick={() => { setSelectedTaskId(null), setSelectedTask(null) }}>Сбросить выделение</button>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {
            tasks.map(task => {
              return (
                <div key={task.id} onClick={() => {
                  setSelectedTaskId(task.id);

                  fetch(`https://trelly.it-incubator.app/api/1.0/boards/${task.attributes.boardId}/tasks/${task.id}`, {
                    headers: {
                      'api-key': 'd3a87c43-74d4-4047-baf4-7c9d4dbb9a5b'
                    }
                  }).then(res => res.json()).then(data => setSelectedTask(data.data));
                }} className='app-task' style={{
                  background: getTaskColorPriority(task.attributes.priority),
                  border: selectedTaskId === task.id ? '5px solid blue' : 'none'
                }}>
                  <strong>Заголовок: </strong> <span style={{ textDecorationLine: task.attributes.status === 2 ? 'line-through' : 'none' }}>{task.attributes.title}</span> <br></br>
                  <strong>Статус: </strong> <input type='checkbox' defaultChecked={task.attributes.status === 2} /> <br></br>
                  <strong>Дата создания задачи: </strong> {new Date(task.attributes.addedAt).toLocaleDateString()}
                </div>
              )
            })
          }
        </div>

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
      </div>
    </div>
  )
}
