import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TasksList } from './components/TasksList'
import { TaskDetails } from './components/TaskDetails'
// import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)

function MainPage() {
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [boardId, setBoardId] = useState(null)

  const handleTaskSelect = (taskId, boardId) => {
    setSelectedTaskId(taskId);
    setBoardId(boardId);
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <TasksList selectedTaskId={selectedTaskId} onTaskSelect={handleTaskSelect} />
        <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId}/>
      </div>
    </div>
  )
}
