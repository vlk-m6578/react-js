import { useState } from "react"
import { Congratulations } from "./Congratulations";
import { GameOver } from "./GameOver";

export function Game() {
  const [activePage, setActivePage] = useState('counter');

  const onFinish = () => {
    setActivePage('elephant');
  }

  const onReset = () => {
    setActivePage('counter');
  }

  const onCongratulate = () => {
    setActivePage('congratulations');
  }

  const onOver = () => {
    setActivePage('gameover');
  }

  return (
    <div>
      {activePage === 'counter' && <Counter onFinish={onFinish} />}
      {activePage === 'elephant' && <Elephant onReset={onReset} onCongratulate={onCongratulate} onOver={onOver} />}
      {activePage === 'congratulations' && <Congratulations onReset={onReset} />}
      {activePage === 'gameover' && <GameOver onReset={onReset} />}
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
      <div>Нажми на кнопку 4 раза, чтобы увидеть слона</div>
      <button onClick={handleClick}>+ {value}</button>
    </div>
  )
}

function Elephant({ onReset, onCongratulate, onOver }) {
  const [weight, setWeight] = useState(100)

  const handleFeedHealthyFood = () => {
    setWeight(weight + 20);
  }

  const handleFeedJunkFood = () => {
    setWeight(weight - 20);
  }

  return (
    <div>
      <h1>Покорми слона</h1>
      <button onClick={() => {
        if (weight >= 200) onCongratulate()
        else handleFeedHealthyFood()
      }}>Кормить слона полезной едой 🥬🍉🍌</button>
      <br />
      <button onClick={() => {
        if (weight <= 20) onOver()
        else handleFeedJunkFood()
      }}>Кормить слона вредной едой 🍔🍬🍕</button>

      <div style={{ fontSize: `${weight}px` }}>🐘</div>
    </div>
  )
}
