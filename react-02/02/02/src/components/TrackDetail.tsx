import { useEffect, useState } from "react"

export function TrackDetail() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const selectedTrackId = '8c1c8624-b409-43cd-9ac3-10b15576feb9';

  useEffect(() => {

    if (!selectedTrackId) return;

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: {
        'api-key': 'a3d155c3-300c-46e0-9b83-0bf8f0a8601e'
      }
    }).then(res => res.json()).then(data => setSelectedTrack(data.data));
  }, [selectedTrackId])

  return (
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
  )
}