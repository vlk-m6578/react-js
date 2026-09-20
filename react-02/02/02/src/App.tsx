import { useEffect, useState } from "react";

// const tracks = null;
// const tracks = [
//   { id: 1, title: 'Musicfan soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' },
//   { id: 2, title: 'Musicfan soundtrack instrumental', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3' }
// ]

export function App() {

  const [selectedTrackId, setSelectedTrackId] = useState(1);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    console.log('ff');
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': 'f8df4a9e-bfc0-409f-b79f-fb331b5ad033'
      }
    }).then(res => res.json()).then(data => setTracks(data.data));
  }, []);


  if (tracks === null) {
    return <span>loading...</span>
  }

  if (tracks.length === 0) {
    return <span>no tracks</span>
  }

  return (
    <div>
      <h1>Musicfun Player</h1>
      <button onClick={() => { setSelectedTrackId(null) }}>reset selection</button>
      <ul>
        {tracks.map(track => {
          return (
            <li key={track.id} style={{ border: track.id === selectedTrackId ? '1px solid orange' : 'none' }}>
              <div onClick={() => { setSelectedTrackId(track.id) }}>
                {track.attributes.title}
              </div>
              <audio src={track.attributes.attachments[0].url} controls></audio>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const name = 'AppFileComponent';