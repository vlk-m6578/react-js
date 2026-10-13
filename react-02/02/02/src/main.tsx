import { createRoot } from 'react-dom/client'
import './index.css'
import { TracksList } from './components/TracksList';
import { TrackDetail } from './components/TrackDetail';
import { useState } from 'react';
// import { App } from './App.tsx'

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);
reactRoot.render(
  <MainPage />
)

function MainPage() {
  const [trackId, setTrackId] = useState<string | null>(null);

  const handleTrackSelect = (id: string | null) => {
    setTrackId(id);
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <TracksList selectedTrackId={trackId} onTrackSelect={handleTrackSelect} />
        <TrackDetail trackId={trackId} />
      </div>
    </div>
  )
}
