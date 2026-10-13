import { useEffect, useState } from "react"

type TrackDetailsAttributes = {
  title: string
  lyrics: string | null
}

type TrackDetailsResource = {
  id: string
  attributes: TrackDetailsAttributes
}

type TrackDetailProps = {
  trackId: string | null
}

export function TrackDetail({ trackId }: TrackDetailProps) {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null);

  useEffect(() => {

    if (!trackId) {
      setSelectedTrack(null);
      return;
    }

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
      headers: {
        'api-key': 'a3d155c3-300c-46e0-9b83-0bf8f0a8601e'
      }
    }).then(res => res.json()).then(data => setSelectedTrack(data.data));
  }, [trackId])

  return (
    <div>
      <h3>Details</h3>
      {!selectedTrack && !trackId && 'Track is not selected'}
      {!selectedTrack && trackId && 'Loading...'}
      {selectedTrack && trackId && selectedTrack?.id !== trackId && 'Loading...'}
      {selectedTrack && (
        <div>
          {selectedTrack.attributes.title}
          <p>{!selectedTrack.attributes.lyrics ? 'no lyrics' : selectedTrack.attributes.lyrics}</p>
        </div>
      )}
    </div>
  )
}