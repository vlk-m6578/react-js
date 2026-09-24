import { useEffect, useState } from "react";

export function TracksList() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': 'a3d155c3-300c-46e0-9b83-0bf8f0a8601e'
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
  )
}