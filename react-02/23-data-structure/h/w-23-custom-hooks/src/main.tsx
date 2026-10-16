import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TogglePage } from './LightSwitch.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TogglePage />
  </StrictMode>,
)
