
type TrackDetailsAttributes = {
  title: string
  lyrics: string | null
}

export type TrackDetailsResource = {
  id: string
  attributes: TrackDetailsAttributes
}

type GetTrackDetailsOutput = {
  data: TrackDetailsResource
}

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
    headers: {
      'api-key': 'a3d155c3-300c-46e0-9b83-0bf8f0a8601e'
    }
  }).then(res => res.json())
  return promise
}

type TrackListItemAttributes = {
  title: string
  attachments: Array<TrackAttachment>
}

type TrackAttachment = {
  url: string
}

export type TrackListItemResource = {
  id: string
  attributes: TrackListItemAttributes
}

type GetTrackListOutput = {
  data: Array<TrackListItemResource>
}

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: {
      'api-key': 'a3d155c3-300c-46e0-9b83-0bf8f0a8601e'
    }
  }).then(res => res.json())
  return promise
}