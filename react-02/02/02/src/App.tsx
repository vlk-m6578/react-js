// const tracks = null;
const tracks = [
  { id: 1, title: 'Musicfan soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' },
  { id: 2, title: 'Musicfan soundtrack instrumental', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3' }
]
let selectedTrackId = 1;

export function App() {

  if (tracks === null) {
    return <span>loading...</span>
  }

  if (tracks.length === 0) {
    return <span>no tracks</span>
  }

  return (
    <div>
      <h1>Musicfun Player</h1>
      <ul>
        {tracks.map(track => {
          return (
            <li key={track.id} style={{ border: track.id === selectedTrackId ? '1px solid orange' : 'none' }}>
              <div>
                {track.title}
              </div>
              <audio src={track.url} controls></audio>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const name = 'AppFileComponent';