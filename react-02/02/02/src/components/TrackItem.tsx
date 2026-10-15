import type { TrackListItemResource } from "../api/api"

type TrackItemProps = {
  track: TrackListItemResource
  onSelect: (trackId: string) => void
  isSelected: boolean
}

export function TrackItem({ track, onSelect, isSelected }: TrackItemProps) {

  return (
    <li key={track.id} style={{ border: isSelected ? '1px solid orange' : 'none' }}>
      <div onClick={() => { onSelect(track.id) }}>
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}