import { useState } from "react"

export const LightSwitch = () => {
  const { isOn, toggle } = useToggle(false)

  return (
    <div>
      <h2>Выключатель света</h2>
      <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
      <button onClick={toggle}>Переключить свет</button>
    </div>
  )
}

function VisibilityToggle() {
  const { isOn, setIsOn } = useToggle(false)

  return (
    <div>
      <h2>Секретное сообщение</h2>
      <h2>{isOn ? "🎉 Это секретное сообщение!" : ""}</h2>
      <button onClick={() => { setIsOn(true) }}>Показать</button>
      <button onClick={() => { setIsOn(false) }}>Скрыть</button>
    </div>
  )
}

function NotificationSwitch() {
  const { isOn, toggle, setIsOn, reset } = useToggle(false)

  return (
    <div>
      <h2>Настройки уведомлений</h2>
      <h2>{isOn ? "🔔 Уведомления включены" : "🔕 Уведомления выключены"}</h2>
      <button onClick={toggle}>Переключить</button>
      <button onClick={() => { setIsOn(true) }}>Включить</button>
      <button onClick={reset}>Сбросить по умолчанию</button>
    </div>
  )
}

function useToggle(initialValue: boolean) {
  const [isOn, setIsOn] = useState(initialValue)

  const toggle = () => {
    setIsOn(!isOn)
  }

  const reset = () => {
    setIsOn(initialValue)
  }

  return { isOn, toggle, setIsOn, reset }
}

export const TogglePage = () => {
  return (
    <div>
      <LightSwitch />
      <VisibilityToggle />
      <NotificationSwitch />
      <TextPage />
    </div>
  )
}

function TitleEditor() {
  const { text, setText, clear, toUpperCase, toLowerCase } = useText('Заголовок статьи')

  return (
    <div>
      <h2>{text || "Пусто"}</h2>
      <button onClick={toUpperCase}>ВЕРХНИЙ РЕГИСТР</button>
      <button onClick={toLowerCase}>нижний регистр</button>
      <button onClick={() => { setText('Новый заголовок') }}>Изменить на 'Новый заголовок'</button>
      <button onClick={clear}>Очистить</button>
    </div>
  )
}

function GreetingCard() {
  const { text, setText, clear, toUpperCase, toLowerCase } = useText('Привет!')

  return (
    <div>
      <h2>💬 {text || "..."}</h2>
      <button onClick={toUpperCase}>ГРОМКО</button>
      <button onClick={toLowerCase}>тихо</button>
      <button onClick={() => { setText('Добро пожаловать!') }}>Сказать 'Добро пожаловать!'</button>
      <button onClick={clear}>Молчать</button>
    </div>
  )
}

function TextPage() {
  return (
    <div>
      <TitleEditor />
      <GreetingCard />
    </div>
  )
}

function useText(initialText: string = '') {
  const [text, setText] = useState(initialText)

  const clear = () => {
    setText('')
  }

  const toUpperCase = () => {
    setText(text.toUpperCase())
  }

  const toLowerCase = () => {
    setText(text.toLowerCase())
  }

  return { text, setText, clear, toUpperCase, toLowerCase }
}