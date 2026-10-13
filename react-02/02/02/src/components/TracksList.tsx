import { useEffect, useState } from "react";
import { TrackItem, type TrackListItemResource } from "./TrackItem";

type TracksListProps = {
  selectedTrackId: string | null
  onTrackSelect: (id: string | null) => void
}

export function TracksList({ selectedTrackId, onTrackSelect } : TracksListProps) {
  const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);

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

  const hadleResetClick = () => {
    onTrackSelect?.(null);
  }

  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId)
  }

  return (
    <div>
      <button onClick={hadleResetClick}>reset</button>

      <ul>
        {tracks.map(track => {
          return (
            <TrackItem track={track} onSelect={handleClick} isSelected={selectedTrackId === track.id ? true : false} />
          )
        })}
      </ul>
    </div>
  )
}