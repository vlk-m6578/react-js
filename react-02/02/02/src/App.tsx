import { useEffect, useState } from "react";

export function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': 'a3d155c3-300c-46e0-9b83-0bf8f0a8601e'
      }
    }).then(res => res.json()).then(data => setTracks(data.data));
  }, []);

  useEffect(() => {

    if (!selectedTrackId) return;

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: {
        'api-key': 'a3d155c3-300c-46e0-9b83-0bf8f0a8601e'
      }
    }).then(res => res.json()).then(data => setSelectedTrack(data.data));
  }, [selectedTrackId])


  if (tracks === null) {
    return <span>loading...</span>
  }

  if (tracks.length === 0) {
    return <span>no tracks</span>
  }

  return (
    <div>
      <h1>Musicfun Player</h1>
      <button onClick={() => { setSelectedTrackId(null); setSelectedTrack(null) }}>reset selection</button>
      <div style={{ display: 'flex', gap: '10px' }}>
        <ul>
          {tracks.map(track => {
            return (
              <li key={track.id} style={{ border: track.id === selectedTrackId ? '1px solid orange' : 'none' }}>
                <div onClick={() => {
                  setSelectedTrackId(track.id);
                }}>
                  {track.attributes.title}
                </div>
                <audio src={track.attributes.attachments[0].url} controls></audio>
              </li>
            )
          })}
        </ul>
        
        <div>
          <h3>Details</h3>
          {
            selectedTrackId === selectedTrack?.id ?
              <div>
                {selectedTrack.attributes.title}
                <p>{!selectedTrack.attributes.lyrics ? 'no lyrics' : selectedTrack.attributes.lyrics}</p>
              </div> : selectedTrackId === null ? 'Track is not selected' : <span>loading...</span>
          }
        </div>
      </div>
    </div>
  )
}

export const name = 'AppFileComponent';