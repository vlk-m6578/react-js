import { useState } from "react"

export function Game() {
  const [activePage, setActivePage] = useState('counter');

  const onFinish = () => {
    setActivePage('elephant');
  }

  return (
    <div>
      {activePage === 'counter' && <Counter onFinish={onFinish} />}
      {activePage === 'elephant' && <Elephant />}
    </div>
  )
}

function Counter({ onFinish }) {
  const [value, setValue] = useState(1);

  const handleClick = () => {
    setValue(value + 1);
    if (value + 1 === 5 && onFinish) onFinish();
  }

  return (
    <div>
      <div>Count to 5</div>
      <button onClick={handleClick}>+ {value}</button>
    </div>
  )
}

function Elephant() {
  return (
    <div style={{ fontSize: '100px' }}>🐘</div>
  )
}