import { useEffect, useState } from "react"
import { getTrack, type TrackDetailsResource } from "../api/api"

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

    getTrack(trackId).then(data => setSelectedTrack(data.data));
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