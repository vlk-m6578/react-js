import { createRoot } from 'react-dom/client'
import { Users } from './components/Users.tsx'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <Users />
  <App />
)
