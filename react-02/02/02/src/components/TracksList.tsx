import { useEffect, useState } from "react";
import { TrackItem } from "./TrackItem";
import { getTracks, type TrackListItemResource } from "../api/api";

type TracksListProps = {
  selectedTrackId: string | null
  onTrackSelect: (id: string | null) => void
}

export function TracksList({ selectedTrackId, onTrackSelect } : TracksListProps) {
  const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);

  useEffect(() => {
    getTracks().then(data => setTracks(data.data));
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