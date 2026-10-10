type AuthorType = {
  name: string
  age: number
}

const author: AuthorType = {
  name: 'Aboba',
  age: 36,
}

export type TrackType = {
  title: string;
  author: AuthorType
}

const track: TrackType = {
  title: 'Track title',
  author,
}

console.log(track.author.name)