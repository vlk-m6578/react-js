function sum(a: number, b: number) {
  return a + b
}

console.log(sum(12, 1))

type PropsType = {
  value: string
  onChange: () => void
  onSelect: (trackId: string) => void 
}

function Component(props: PropsType) {
  props.onChange()
  return 'Value: ' + props.value
}

console.log(Component({
  value: 'hello', onChange: () => {
    console.log('onchange')
  },
  onSelect: (trackId: string) => {
    console.log('onselect')
  }
}))