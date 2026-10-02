export function Congratulations({onReset}) {
  return (
    <div>
      <h1>🎉 Поздравляю! Твой слон наелся здоровой пищи и с улыбкой побежал играть с другими слонами🎉</h1>
      <button onClick={onReset}>Давай сыграем еще раз и покормим другого слона</button>
      <div style={{ fontSize: "200px" }}>😊</div>
    </div>
  )
}