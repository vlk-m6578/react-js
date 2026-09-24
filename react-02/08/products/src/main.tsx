import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/Header'
import { TasksList } from './components/TasksList'
import { TaskDetails } from './components/TaskDetails'
import { Footer } from './components/Footer'
import { PageTitle } from './components/PageTitle'
// import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)

function MainPage() {
  return (
    <div>
      <Header />
      <PageTitle />
      <div style={{ display: "flex", gap: "30px" }}>
        <TasksList />
        <TaskDetails />
      </div>
      <Footer />
    </div>
  )
}
