let a: number = 10
let firstName: string = 'Dmitry'
let isDeveloper: boolean = true;
let selectedTrackId: string | null = null;

export function run() {
  if (selectedTrackId !== null) {
    console.log(selectedTrackId.toUpperCase())
  }
}

a = 1

console.log(a)