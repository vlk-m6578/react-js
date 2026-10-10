import { TrackType } from "./objects"

const numbers: Array<number> = [1, 2, 3, 4]

numbers.forEach(item => { })

numbers.push(5)

numbers[0].toFixed()

const tracks: Array<TrackType | null> = [null]
tracks.push({
  title: 'sls',
  author: {
    name: 'dld',
    age: 12
  }
})